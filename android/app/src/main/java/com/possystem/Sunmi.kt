package com.possystem;
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import android.util.Log

class SunmiModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "SunmiModule"

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun createsSampleLog(name: String) {
        Log.d("CalendarModule", "Create event called with name: $name")
    }
}
