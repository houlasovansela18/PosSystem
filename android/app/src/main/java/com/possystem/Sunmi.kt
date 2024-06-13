package com.possystem

import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.net.Uri
import android.view.View
import androidx.lifecycle.MutableLiveData
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.sunmi.printerx.PrinterSdk
import com.sunmi.printerx.PrinterSdk.Printer
import com.sunmi.printerx.api.PrintResult
import com.sunmi.printerx.enums.Align
import com.sunmi.printerx.enums.Command
import com.sunmi.printerx.enums.DividingLine
import com.sunmi.printerx.enums.ErrorLevel
import com.sunmi.printerx.enums.HumanReadable
import com.sunmi.printerx.enums.ImageAlgorithm
import com.sunmi.printerx.enums.PrinterInfo
import com.sunmi.printerx.enums.PrinterType
import com.sunmi.printerx.style.BarcodeStyle
import com.sunmi.printerx.style.BaseStyle
import com.sunmi.printerx.style.BitmapStyle
import com.sunmi.printerx.style.QrStyle
import com.sunmi.printerx.style.TextStyle
import java.net.HttpURLConnection
import java.net.URL


var selectPrinter: Printer? = null

class SunmiModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "SunmiModule"

    private var printer: PrinterSdk.Printer? = null

    var showPrinters = MutableLiveData<MutableList<PrinterSdk.Printer>?>()

    @ReactMethod
    fun initPrinter() {
        PrinterSdk.getInstance().getPrinter(reactApplicationContext, object : PrinterSdk.PrinterListen {

            override fun onDefPrinter(printer: PrinterSdk.Printer?) {
                if (selectPrinter == null) {
                    selectPrinter = printer
                }
            }

            override fun onPrinters(printers: MutableList<PrinterSdk.Printer>?) {
                showPrinters.postValue(printers)
            }

        })
    }

    @ReactMethod
    fun changeSelectPrinter() {
        selectPrinter = printer
    }

    @ReactMethod
    fun showPrinter(printer: PrinterSdk.Printer) {
        this.printer = printer
    }

    @ReactMethod
    fun checkPrinterPaper(printer: PrinterSdk.Printer) {
        printer.let {
            val paper = it.queryApi().getInfo(PrinterInfo.PAPER)
            val printerType = it.queryApi().getInfo(PrinterInfo.TYPE)
            when (paper) {
                "58mm" -> println("打印机纸张58mm")
                "80mm" -> println("打印机纸张80mm")
                else -> {
                    if (printerType == PrinterType.THERMAL.toString()) {
                        println("打印机纸张58mm")
                    } else {
                        println("非热敏打印机")
                    }
                }
            }
        }
    }

    // Function to fetch and decode bitmap from URL
    private fun getBitmapFromURL(src: String): Bitmap? {
        return try {
            val url = URL(src)
            val connection: HttpURLConnection = url.openConnection() as HttpURLConnection
            connection.doInput = true
            connection.connect()
            val input = connection.inputStream
            BitmapFactory.decodeStream(input)
        } catch (e: Exception) {
            e.printStackTrace()
            null
        }
    }

    /**
     * 打印Logo的例子
     * 分别使用二值化处理图片和抖动算法处理图片
     * 由于logo本身透明背景橙色字体，使用二值化处理后通过设置阈值呈现不同效果
     */
    @ReactMethod
    fun printBitmap(url: String) {
        selectPrinter?.lineApi()?.run {

            val options = BitmapFactory.Options().apply {
                inScaled = false
            }

            val image = getBitmapFromURL(url)
            printBitmap(image, BitmapStyle.getStyle().apply {
                setAlign(Align.CENTER)
                setAlgorithm(ImageAlgorithm.BINARIZATION)
                setValue(120)
                setWidth(384)
                setHeight(384)
            })
            autoOut()
        }
    }

    /**
     * 结合上面构建一个标准的小票内容
     */
    @ReactMethod
    fun printTicket(view: View, id: Int) {
        selectPrinter?.lineApi()?.run {
            initLine(BaseStyle.getStyle().setAlign(Align.CENTER))
            addText("******", TextStyle.getStyle())
            addText("商米之家", TextStyle.getStyle().enableBold(true).setTextWidthRatio(1).setTextHeightRatio(1))
            printText( "******", TextStyle.getStyle())
            val option: BitmapFactory.Options = BitmapFactory.Options().apply {
                inScaled = false
            }
            val bitmap = BitmapFactory.decodeResource(view.context.resources, id, option)
            printBitmap(bitmap, BitmapStyle.getStyle().setAlign(Align.CENTER).setAlgorithm(
                ImageAlgorithm.BINARIZATION).setValue(120).setWidth(384).setHeight(150))
            printDividingLine(DividingLine.EMPTY, 30)
            printDividingLine(DividingLine.DOTTED, 2)
            printDividingLine(DividingLine.EMPTY, 30)
            val textStyle = TextStyle.getStyle().setAlign(Align.LEFT)
            printTexts(arrayOf("商品1","商品12","商品13"), intArrayOf(1, 1, 1), arrayOf(textStyle, textStyle, textStyle))
            printTexts(arrayOf("商品21","商品22","商品23"), intArrayOf(1, 1, 1), arrayOf(textStyle, textStyle, textStyle))
            printTexts(arrayOf("商品31","商品32","商品33"), intArrayOf(1, 1, 1), arrayOf(textStyle, textStyle, textStyle))
            printText("商品信息条码信息:", TextStyle.getStyle())
            printBarCode("1234567890", BarcodeStyle.getStyle().setAlign(Align.CENTER).setReadable(
                HumanReadable.POS_TWO))
            printDividingLine(DividingLine.EMPTY, 30)
            printDividingLine(DividingLine.DOTTED, 2)
            initLine(BaseStyle.getStyle().setAlign(Align.CENTER))
            printText("--已支付--", TextStyle.getStyle().setTextSize(48))
            printText( "预计19：00送达", TextStyle.getStyle().setTextSize(48))
            initLine(BaseStyle.getStyle().setAlign(Align.LEFT))
            printText( "【下单时间】2021-8-1 12:00", TextStyle.getStyle())
            addText("【备注】", TextStyle.getStyle())
            printText("尽快送达", TextStyle.getStyle().setTextHeightRatio(2))
            printDividingLine(DividingLine.EMPTY, 30)
            printDividingLine(DividingLine.DOTTED, 2)
            printText("【发票抬头】", TextStyle.getStyle().setTextSize(16))
            printQrCode("1234567890", QrStyle.getStyle().setDot(9).setAlign(Align.CENTER))
            autoOut()
        }
    }

    /**
     * 指定地址文件打印，可打印pdf、图片
     */
    @ReactMethod
    fun printUrl(url: String) {
        selectPrinter?.fileApi()
            ?.printFile(url, object: PrintResult() {
                override fun onResult(resultCode: Int, message: String?) {
                }

            })
    }

    /**
     * 通过选择文件打印，可打印pdf、图片
     */
    @ReactMethod
    fun printFile(uri: Uri) {
        selectPrinter?.fileApi()?.printFile(uri.toString(), object : PrintResult(){
            override fun onResult(resultCode: Int, message: String?) {
            }

        })
    }

    @ReactMethod
    fun releaseSdk() {
        PrinterSdk.getInstance().destroy()
    }
}
