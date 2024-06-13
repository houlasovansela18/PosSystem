import {StyleSheet} from 'react-native';
import {AppThemeConfig} from './app-theme-config';
import useThemeColor from './app-theme-color';

export default function useAppStyle() {
  const appColor = useThemeColor();
  const radiusSizeConfig = AppThemeConfig.RadiusSizeConfig;
  const borderWidth = AppThemeConfig.BorderWidthConfig;
  const opacityLevel = AppThemeConfig.OpacityLevelConfig;
  const fontSizeConfig = AppThemeConfig.FontSizeConfig;

  return StyleSheet.create({
    backfaceVisibilityVisible: {
      backfaceVisibility: 'visible',
    },
    backfaceVisibilityHidden: {
      backfaceVisibility: 'hidden',
    },
    backgroundColorPrimary: {
      backgroundColor: appColor.backgroundPrimary,
    },
    backgroundColorSecondary: {
      backgroundColor: appColor.backgroundSecondary,
    },
    borderColorPrimary: {
      borderColor: appColor.primary,
    },
    borderColorSecondary: {
      borderColor: appColor.secondary,
    },
    borderRadius2dp: {
      borderRadius: radiusSizeConfig['2dp'],
    },
    borderRadius4dp: {
      borderRadius: radiusSizeConfig['4dp'],
    },
    borderRadius8dp: {
      borderRadius: radiusSizeConfig['8dp'],
    },
    borderRadius12dp: {
      borderRadius: radiusSizeConfig['12dp'],
    },
    borderRadius16dp: {
      borderRadius: radiusSizeConfig['16dp'],
    },
    borderRadius24dp: {
      borderRadius: radiusSizeConfig['24dp'],
    },
    borderWidthNone: {
      borderWidth: borderWidth.none,
    },
    borderWidthHairline: {
      borderWidth: borderWidth.hairline,
    },
    borderWidthThin: {
      borderWidth: borderWidth.thin,
    },
    borderWidthLight: {
      borderWidth: borderWidth.light,
    },
    borderWidthMedium: {
      borderWidth: borderWidth.medium,
    },
    borderWidthSemiBold: {
      borderWidth: borderWidth.semibold,
    },
    borderWidthBold: {
      borderWidth: borderWidth.bold,
    },
    borderStyleSolid: {
      borderStyle: 'solid',
    },
    borderStyleDahed: {
      borderStyle: 'dashed',
    },
    borderStyleDotted: {
      borderStyle: 'dotted',
    },
    opacityFull: {
      opacity: opacityLevel.FULL,
    },
    opacityHigh: {
      opacity: opacityLevel.HIGH,
    },
    opacityMedium: {
      opacity: opacityLevel.MEDIUM,
    },
    opacityLow: {
      opacity: opacityLevel.LOW,
    },
    opacityTransparent: {
      opacity: opacityLevel.TRANSPARENT,
    },
    overFlowVisible: {
      overflow: 'visible',
    },
    overFlowHidden: {
      overflow: 'hidden',
    },
    fontColorPrimary: {
      color: appColor.textPrimary,
    },
    fontColorSecondary: {
      color: appColor.textSecondary,
    },
    fontSizeH1: {
      fontSize: fontSizeConfig.h1,
    },
    fontSizeH2: {
      fontSize: fontSizeConfig.h2,
    },
    fontSizeH3: {
      fontSize: fontSizeConfig.h3,
    },
    fontSizeH4: {
      fontSize: fontSizeConfig.h4,
    },
    fontSizeH5: {
      fontSize: fontSizeConfig.h5,
    },
    fontSizeH6: {
      fontSize: fontSizeConfig.h6,
    },
    fontSizeSubHeading: {
      fontSize: fontSizeConfig.subHeading,
    },
    fontSizeBody: {
      fontSize: fontSizeConfig.body,
    },
    fontSizeSmallText: {
      fontSize: fontSizeConfig.smallText,
    },
    fontSizeExtraSmallText: {
      fontSize: fontSizeConfig.extraSmallText,
    },
    fontSizeCaption: {
      fontSize: fontSizeConfig.caption,
    },
    fontSizeNormal: {
      fontStyle: 'normal',
    },
    fontSizeItalic: {
      fontStyle: 'italic',
    },
    fontThin: {
      fontWeight: '100',
    },
    fontExtraLight: {
      fontWeight: '200',
    },
    fontLight: {
      fontWeight: '300',
    },
    fontNormal: {
      fontWeight: '400',
    },
    fontMedium: {
      fontWeight: '500',
    },
    fontSemiBold: {
      fontWeight: '600',
    },
    fontBold: {
      fontWeight: '700',
    },
    fontExtraBold: {
      fontWeight: '800',
    },
    fontBlack: {
      fontWeight: '900',
    },
    textAlightAuto: {
      textAlign: 'auto',
    },
    textAlightLeft: {
      textAlign: 'left',
    },
    textAlightRight: {
      textAlign: 'right',
    },
    textAlightCenter: {
      textAlign: 'center',
    },
    textAlightJustify: {
      textAlign: 'justify',
    },
    textDecorationLineNone: {
      textDecorationLine: 'none',
    },
    textDecorationLineUnderline: {
      textDecorationLine: 'underline',
    },
    textDecorationLineThrough: {
      textDecorationLine: 'line-through',
    },
    textDecorationLineThroughUnderling: {
      textDecorationLine: 'underline line-through',
    },
    textTransformNone: {
      textTransform: 'none',
    },
    textTransformUppercase: {
      textTransform: 'uppercase',
    },
    textTransforLowercase: {
      textTransform: 'lowercase',
    },
    textTransforCapitalize: {
      textTransform: 'capitalize',
    },
    resizeModeCover: {
      resizeMode: 'cover',
    },
    resizeModeContain: {
      resizeMode: 'contain',
    },
    resizeModeStrech: {
      resizeMode: 'stretch',
    },
    resizeModeRepeat: {
      resizeMode: 'repeat',
    },
    resizeModeCenter: {
      resizeMode: 'center',
    },
    objectFitCover: {
      objectFit: 'cover',
    },
    objectFitContain: {
      objectFit: 'contain',
    },
    objectFitFill: {
      objectFit: 'fill',
    },
    objectFitScalDown: {
      objectFit: 'scale-down',
    },
    alignContentFlexStart: {
      alignContent: 'flex-start',
    },
    alignContentFlexEnd: {
      alignContent: 'flex-end',
    },
    alignContentCenter: {
      alignContent: 'center',
    },
    alignContentStrech: {
      alignContent: 'stretch',
    },
    alignContentSpaceBetween: {
      alignContent: 'space-between',
    },
    alignContentSpaceAround: {
      alignContent: 'space-around',
    },
    alignContentSpaceEvenly: {
      alignContent: 'space-evenly',
    },
    alignItemsFlexStart: {
      alignItems: 'flex-start',
    },
    alignItemsFlexEnd: {
      alignItems: 'flex-end',
    },
    alignItemsCenter: {
      alignItems: 'center',
    },
    alignItemsStrech: {
      alignItems: 'stretch',
    },
    alignItemsBaseline: {
      alignItems: 'baseline',
    },
    alignSelfFlexStart: {
      alignSelf: 'flex-start',
    },
    alignSelfFlexEnd: {
      alignSelf: 'flex-end',
    },
    alignSelfCenter: {
      alignSelf: 'center',
    },
    alignSelfStrech: {
      alignSelf: 'stretch',
    },
    alignSelfBaseline: {
      alignSelf: 'baseline',
    },
    alignSelfAuto: {
      alignSelf: 'auto',
    },
    bottom2: {
      bottom: 2,
    },
    bottom4: {
      bottom: 4,
    },
    bottom6: {
      bottom: 6,
    },
    bottom8: {
      bottom: 8,
    },
    bottom10: {
      bottom: 10,
    },
    bottom12: {
      bottom: 12,
    },
    bottom14: {
      bottom: 14,
    },
    bottom16: {
      bottom: 16,
    },
    bottom18: {
      bottom: 18,
    },
    bottom20: {
      bottom: 20,
    },
    bottom22: {
      bottom: 22,
    },
    bottom24: {
      bottom: 24,
    },
    columnGap2: {
      columnGap: 2,
    },
    columnGap4: {
      columnGap: 4,
    },
    columnGap6: {
      columnGap: 6,
    },
    columnGap8: {
      columnGap: 8,
    },
    columnGap10: {
      columnGap: 10,
    },
    columnGap12: {
      columnGap: 12,
    },
    columnGap14: {
      columnGap: 14,
    },
    columnGap16: {
      columnGap: 16,
    },
    columnGap18: {
      columnGap: 18,
    },
    columnGap20: {
      columnGap: 20,
    },
    columnGap22: {
      columnGap: 22,
    },
    columnGap24: {
      columnGap: 24,
    },
    directionInherit: {
      direction: 'inherit',
    },
    directionLtr: {
      direction: 'ltr',
    },
    directionRtl: {
      direction: 'rtl',
    },
    displayFlex: {
      display: 'flex',
    },
    displayNone: {
      display: 'none',
    },
    right2: {
      right: 2,
    },
    right4: {
      right: 4,
    },
    right6: {
      right: 6,
    },
    right8: {
      right: 8,
    },
    right10: {
      right: 10,
    },
    right12: {
      right: 12,
    },
    right14: {
      right: 14,
    },
    right16: {
      right: 16,
    },
    right18: {
      right: 18,
    },
    right20: {
      right: 20,
    },
    right22: {
      right: 22,
    },
    right24: {
      right: 24,
    },
    left2: {
      left: 2,
    },
    left4: {
      left: 4,
    },
    left6: {
      left: 6,
    },
    left8: {
      left: 8,
    },
    left10: {
      left: 10,
    },
    left12: {
      left: 12,
    },
    left14: {
      left: 14,
    },
    left16: {
      left: 16,
    },
    left18: {
      left: 18,
    },
    left20: {
      left: 20,
    },
    left22: {
      left: 22,
    },
    left24: {
      left: 24,
    },
    end2: {
      end: 2,
    },
    end4: {
      end: 4,
    },
    end6: {
      end: 6,
    },
    end8: {
      end: 8,
    },
    end10: {
      end: 10,
    },
    end12: {
      end: 12,
    },
    end14: {
      end: 14,
    },
    end16: {
      end: 16,
    },
    end18: {
      end: 18,
    },
    end20: {
      end: 20,
    },
    end22: {
      end: 22,
    },
    end24: {
      end: 24,
    },
    start2: {
      start: 2,
    },
    start4: {
      start: 4,
    },
    start6: {
      start: 6,
    },
    start8: {
      start: 8,
    },
    start10: {
      start: 10,
    },
    start12: {
      start: 12,
    },
    start14: {
      start: 14,
    },
    start16: {
      start: 16,
    },
    start18: {
      start: 18,
    },
    start20: {
      start: 20,
    },
    start22: {
      start: 22,
    },
    start24: {
      start: 24,
    },
    top2: {
      top: 2,
    },
    top4: {
      top: 4,
    },
    top6: {
      top: 6,
    },
    top8: {
      top: 8,
    },
    top10: {
      top: 10,
    },
    top12: {
      top: 12,
    },
    top14: {
      top: 14,
    },
    top16: {
      top: 16,
    },
    top18: {
      top: 18,
    },
    top20: {
      top: 20,
    },
    top22: {
      top: 22,
    },
    top24: {
      top: 24,
    },
    flex0: {
      flex: 0,
    },
    flex1: {
      flex: 1,
    },
    flex2: {
      flex: 2,
    },
    flex3: {
      flex: 3,
    },
    flex4: {
      flex: 4,
    },
    flex5: {
      flex: 5,
    },
    flex6: {
      flex: 6,
    },
    flexBasis0: {
      flexBasis: 0,
    },
    flexBasis1: {
      flexBasis: 1,
    },
    flexBasis2: {
      flexBasis: 2,
    },
    flexBasis3: {
      flexBasis: 3,
    },
    flexBasis4: {
      flexBasis: 4,
    },
    flexBasis5: {
      flexBasis: 5,
    },
    flexBasis6: {
      flexBasis: 6,
    },
    flexGrow0: {
      flexGrow: 0,
    },
    flexGrow1: {
      flexGrow: 1,
    },
    flexGrow2: {
      flexGrow: 2,
    },
    flexGrow3: {
      flexGrow: 3,
    },
    flexGrow4: {
      flexGrow: 4,
    },
    flexGrow5: {
      flexGrow: 5,
    },
    flexGrow6: {
      flexGrow: 6,
    },
    flexShrink0: {
      flexShrink: 0,
    },
    flexShrink1: {
      flexShrink: 1,
    },
    flexShrink2: {
      flexShrink: 2,
    },
    flexShrink3: {
      flexShrink: 3,
    },
    flexShrink4: {
      flexShrink: 4,
    },
    flexShrink5: {
      flexShrink: 5,
    },
    flexShrink6: {
      flexShrink: 6,
    },
    flexDirectionRow: {
      flexDirection: 'row',
    },
    flexDirectionRowReverse: {
      flexDirection: 'row-reverse',
    },
    flexDirectionColumn: {
      flexDirection: 'column',
    },
    flexDirectionColumnReverse: {
      flexDirection: 'column-reverse',
    },
    flexWrap: {
      flexWrap: 'wrap',
    },
    flexWrapReverse: {
      flexWrap: 'wrap-reverse',
    },
    flexWrapNone: {
      flexWrap: 'nowrap',
    },
    gap2: {
      gap: 2,
    },
    gap4: {
      gap: 4,
    },
    gap6: {
      gap: 6,
    },
    gap8: {
      gap: 8,
    },
    gap10: {
      gap: 10,
    },
    gap12: {
      gap: 12,
    },
    gap14: {
      gap: 14,
    },
    gap16: {
      gap: 16,
    },
    gap18: {
      gap: 18,
    },
    gap20: {
      gap: 20,
    },
    gap22: {
      gap: 22,
    },
    gap24: {
      gap: 24,
    },
    rowGap2: {
      rowGap: 2,
    },
    rowGap4: {
      rowGap: 4,
    },
    rowGap6: {
      rowGap: 6,
    },
    rowGap8: {
      rowGap: 8,
    },
    rowGap10: {
      rowGap: 10,
    },
    rowGap12: {
      rowGap: 12,
    },
    rowGap14: {
      rowGap: 14,
    },
    rowGap16: {
      rowGap: 16,
    },
    rowGap18: {
      rowGap: 18,
    },
    rowGap20: {
      rowGap: 20,
    },
    rowGap22: {
      rowGap: 22,
    },
    rowGap24: {
      rowGap: 24,
    },
    height2: {
      height: 2,
    },
    height4: {
      height: 4,
    },
    height6: {
      height: 6,
    },
    height8: {
      height: 8,
    },
    height10: {
      height: 10,
    },
    height12: {
      height: 12,
    },
    height14: {
      height: 14,
    },
    height16: {
      height: 16,
    },
    height18: {
      height: 18,
    },
    height20: {
      height: 20,
    },
    height22: {
      height: 22,
    },
    height24: {
      height: 24,
    },
    width2: {
      width: 2,
    },
    width4: {
      width: 4,
    },
    width6: {
      width: 6,
    },
    width8: {
      width: 8,
    },
    width10: {
      width: 10,
    },
    width12: {
      width: 12,
    },
    width14: {
      width: 14,
    },
    width16: {
      width: 16,
    },
    width18: {
      width: 18,
    },
    width20: {
      width: 20,
    },
    width22: {
      width: 22,
    },
    width24: {
      width: 24,
    },
    justifyContentFlexStart: {
      justifyContent: 'flex-start',
    },
    justifyContentFlexEnd: {
      justifyContent: 'flex-end',
    },
    justifyContentCenter: {
      justifyContent: 'center',
    },
    justifyContentSpaceBetween: {
      justifyContent: 'space-between',
    },
    justifyContentSpaceAround: {
      justifyContent: 'space-around',
    },
    justifyContentSpaceEvenly: {
      justifyContent: 'space-evenly',
    },
    margin2: {
      margin: 2,
    },
    margin4: {
      margin: 4,
    },
    margin6: {
      margin: 6,
    },
    margin8: {
      margin: 8,
    },
    margin10: {
      margin: 10,
    },
    margin12: {
      margin: 12,
    },
    margin14: {
      margin: 14,
    },
    margin16: {
      margin: 16,
    },
    margin18: {
      margin: 18,
    },
    margin20: {
      margin: 20,
    },
    margin22: {
      margin: 22,
    },
    margin24: {
      margin: 24,
    },
    marginBottom2: {
      marginBottom: 2,
    },
    marginBottom4: {
      marginBottom: 4,
    },
    marginBottom6: {
      marginBottom: 6,
    },
    marginBottom8: {
      marginBottom: 8,
    },
    marginBottom10: {
      marginBottom: 10,
    },
    marginBottom12: {
      marginBottom: 12,
    },
    marginBottom14: {
      marginBottom: 14,
    },
    marginBottom16: {
      marginBottom: 16,
    },
    marginBottom18: {
      marginBottom: 18,
    },
    marginBottom20: {
      marginBottom: 20,
    },
    marginBottom22: {
      marginBottom: 22,
    },
    marginBottom24: {
      marginBottom: 24,
    },
    marginEnd2: {
      marginEnd: 2,
    },
    marginEnd4: {
      marginEnd: 4,
    },
    marginEnd6: {
      marginEnd: 6,
    },
    marginEnd8: {
      marginEnd: 8,
    },
    marginEnd10: {
      marginEnd: 10,
    },
    marginEnd12: {
      marginEnd: 12,
    },
    marginEnd14: {
      marginEnd: 14,
    },
    marginEnd16: {
      marginEnd: 16,
    },
    marginEnd18: {
      marginEnd: 18,
    },
    marginEnd20: {
      marginEnd: 20,
    },
    marginEnd22: {
      marginEnd: 22,
    },
    marginEnd24: {
      marginEnd: 24,
    },
    marginHorizontal2: {
      marginHorizontal: 2,
    },
    marginHorizontal4: {
      marginHorizontal: 4,
    },
    marginHorizontal6: {
      marginHorizontal: 6,
    },
    marginHorizontal8: {
      marginHorizontal: 8,
    },
    marginHorizontal10: {
      marginHorizontal: 10,
    },
    marginHorizontal12: {
      marginHorizontal: 12,
    },
    marginHorizontal14: {
      marginHorizontal: 14,
    },
    marginHorizontal16: {
      marginHorizontal: 16,
    },
    marginHorizontal18: {
      marginHorizontal: 18,
    },
    marginHorizontal20: {
      marginHorizontal: 20,
    },
    marginHorizontal22: {
      marginHorizontal: 22,
    },
    marginHorizontal24: {
      marginHorizontal: 24,
    },
    marginLeft2: {
      marginLeft: 2,
    },
    marginLeft4: {
      marginLeft: 4,
    },
    marginLeft6: {
      marginLeft: 6,
    },
    marginLeft8: {
      marginLeft: 8,
    },
    marginLeft10: {
      marginLeft: 10,
    },
    marginLeft12: {
      marginLeft: 12,
    },
    marginLeft14: {
      marginLeft: 14,
    },
    marginLeft16: {
      marginLeft: 16,
    },
    marginLeft18: {
      marginLeft: 18,
    },
    marginLeft20: {
      marginLeft: 20,
    },
    marginLeft22: {
      marginLeft: 22,
    },
    marginLeft24: {
      marginLeft: 24,
    },
    marginRight2: {
      marginRight: 2,
    },
    marginRight4: {
      marginRight: 4,
    },
    marginRight6: {
      marginRight: 6,
    },
    marginRight8: {
      marginRight: 8,
    },
    marginRight10: {
      marginRight: 10,
    },
    marginRight12: {
      marginRight: 12,
    },
    marginRight14: {
      marginRight: 14,
    },
    marginRight16: {
      marginRight: 16,
    },
    marginRight18: {
      marginRight: 18,
    },
    marginRight20: {
      marginRight: 20,
    },
    marginRight22: {
      marginRight: 22,
    },
    marginRight24: {
      marginRight: 24,
    },
    marginStart2: {
      marginStart: 2,
    },
    marginStart4: {
      marginStart: 4,
    },
    marginStart6: {
      marginStart: 6,
    },
    marginStart8: {
      marginStart: 8,
    },
    marginStart10: {
      marginStart: 10,
    },
    marginStart12: {
      marginStart: 12,
    },
    marginStart14: {
      marginStart: 14,
    },
    marginStart16: {
      marginStart: 16,
    },
    marginStart18: {
      marginStart: 18,
    },
    marginStart20: {
      marginStart: 20,
    },
    marginStart22: {
      marginStart: 22,
    },
    marginStart24: {
      marginStart: 24,
    },
    marginTop2: {
      marginTop: 2,
    },
    marginTop4: {
      marginTop: 4,
    },
    marginTop6: {
      marginTop: 6,
    },
    marginTop8: {
      marginTop: 8,
    },
    marginTop10: {
      marginTop: 10,
    },
    marginTop12: {
      marginTop: 12,
    },
    marginTop14: {
      marginTop: 14,
    },
    marginTop16: {
      marginTop: 16,
    },
    marginTop18: {
      marginTop: 18,
    },
    marginTop20: {
      marginTop: 20,
    },
    marginTop22: {
      marginTop: 22,
    },
    marginTop24: {
      marginTop: 24,
    },
    marginVertical2: {
      marginVertical: 2,
    },
    marginVertical4: {
      marginVertical: 4,
    },
    marginVertical6: {
      marginVertical: 6,
    },
    marginVertical8: {
      marginVertical: 8,
    },
    marginVertical10: {
      marginVertical: 10,
    },
    marginVertical12: {
      marginVertical: 12,
    },
    marginVertical14: {
      marginVertical: 14,
    },
    marginVertical16: {
      marginVertical: 16,
    },
    marginVertical18: {
      marginVertical: 18,
    },
    marginVertical20: {
      marginVertical: 20,
    },
    marginVertical22: {
      marginVertical: 22,
    },
    marginVertical24: {
      marginVertical: 24,
    },
    padding2: {
      padding: 2,
    },
    padding4: {
      padding: 4,
    },
    padding6: {
      padding: 6,
    },
    padding8: {
      padding: 8,
    },
    padding10: {
      padding: 10,
    },
    padding12: {
      padding: 12,
    },
    padding14: {
      padding: 14,
    },
    padding16: {
      padding: 16,
    },
    padding18: {
      padding: 18,
    },
    padding20: {
      padding: 20,
    },
    padding22: {
      padding: 22,
    },
    padding24: {
      padding: 24,
    },
    paddingBottom2: {
      paddingBottom: 2,
    },
    paddingBottom4: {
      paddingBottom: 4,
    },
    paddingBottom6: {
      paddingBottom: 6,
    },
    paddingBottom8: {
      paddingBottom: 8,
    },
    paddingBottom10: {
      paddingBottom: 10,
    },
    paddingBottom12: {
      paddingBottom: 12,
    },
    paddingBottom14: {
      paddingBottom: 14,
    },
    paddingBottom16: {
      paddingBottom: 16,
    },
    paddingBottom18: {
      paddingBottom: 18,
    },
    paddingBottom20: {
      paddingBottom: 20,
    },
    paddingBottom22: {
      paddingBottom: 22,
    },
    paddingBottom24: {
      paddingBottom: 24,
    },
    paddingEnd2: {
      paddingEnd: 2,
    },
    paddingEnd4: {
      paddingEnd: 4,
    },
    paddingEnd6: {
      paddingEnd: 6,
    },
    paddingEnd8: {
      paddingEnd: 8,
    },
    paddingEnd10: {
      paddingEnd: 10,
    },
    paddingEnd12: {
      paddingEnd: 12,
    },
    paddingEnd14: {
      paddingEnd: 14,
    },
    paddingEnd16: {
      paddingEnd: 16,
    },
    paddingEnd18: {
      paddingEnd: 18,
    },
    paddingEnd20: {
      paddingEnd: 20,
    },
    paddingEnd22: {
      paddingEnd: 22,
    },
    paddingEnd24: {
      paddingEnd: 24,
    },
    paddingHorizontal2: {
      paddingHorizontal: 2,
    },
    paddingHorizontal4: {
      paddingHorizontal: 4,
    },
    paddingHorizontal6: {
      paddingHorizontal: 6,
    },
    paddingHorizontal8: {
      paddingHorizontal: 8,
    },
    paddingHorizontal10: {
      paddingHorizontal: 10,
    },
    paddingHorizontal12: {
      paddingHorizontal: 12,
    },
    paddingHorizontal14: {
      paddingHorizontal: 14,
    },
    paddingHorizontal16: {
      paddingHorizontal: 16,
    },
    paddingHorizontal18: {
      paddingHorizontal: 18,
    },
    paddingHorizontal20: {
      paddingHorizontal: 20,
    },
    paddingHorizontal22: {
      paddingHorizontal: 22,
    },
    paddingHorizontal24: {
      paddingHorizontal: 24,
    },
    paddingLeft2: {
      paddingLeft: 2,
    },
    paddingLeft4: {
      paddingLeft: 4,
    },
    paddingLeft6: {
      paddingLeft: 6,
    },
    paddingLeft8: {
      paddingLeft: 8,
    },
    paddingLeft10: {
      paddingLeft: 10,
    },
    paddingLeft12: {
      paddingLeft: 12,
    },
    paddingLeft14: {
      paddingLeft: 14,
    },
    paddingLeft16: {
      paddingLeft: 16,
    },
    paddingLeft18: {
      paddingLeft: 18,
    },
    paddingLeft20: {
      paddingLeft: 20,
    },
    paddingLeft22: {
      paddingLeft: 22,
    },
    paddingLeft24: {
      paddingLeft: 24,
    },
    paddingRight2: {
      paddingRight: 2,
    },
    paddingRight4: {
      paddingRight: 4,
    },
    paddingRight6: {
      paddingRight: 6,
    },
    paddingRight8: {
      paddingRight: 8,
    },
    paddingRight10: {
      paddingRight: 10,
    },
    paddingRight12: {
      paddingRight: 12,
    },
    paddingRight14: {
      paddingRight: 14,
    },
    paddingRight16: {
      paddingRight: 16,
    },
    paddingRight18: {
      paddingRight: 18,
    },
    paddingRight20: {
      paddingRight: 20,
    },
    paddingRight22: {
      paddingRight: 22,
    },
    paddingRight24: {
      paddingRight: 24,
    },
    paddingStart2: {
      paddingStart: 2,
    },
    paddingStart4: {
      paddingStart: 4,
    },
    paddingStart6: {
      paddingStart: 6,
    },
    paddingStart8: {
      paddingStart: 8,
    },
    paddingStart10: {
      paddingStart: 10,
    },
    paddingStart12: {
      paddingStart: 12,
    },
    paddingStart14: {
      paddingStart: 14,
    },
    paddingStart16: {
      paddingStart: 16,
    },
    paddingStart18: {
      paddingStart: 18,
    },
    paddingStart20: {
      paddingStart: 20,
    },
    paddingStart22: {
      paddingStart: 22,
    },
    paddingStart24: {
      paddingStart: 24,
    },
    paddingTop2: {
      paddingTop: 2,
    },
    paddingTop4: {
      paddingTop: 4,
    },
    paddingTop6: {
      paddingTop: 6,
    },
    paddingTop8: {
      paddingTop: 8,
    },
    paddingTop10: {
      paddingTop: 10,
    },
    paddingTop12: {
      paddingTop: 12,
    },
    paddingTop14: {
      paddingTop: 14,
    },
    paddingTop16: {
      paddingTop: 16,
    },
    paddingTop18: {
      paddingTop: 18,
    },
    paddingTop20: {
      paddingTop: 20,
    },
    paddingTop22: {
      paddingTop: 22,
    },
    paddingTop24: {
      paddingTop: 24,
    },
    paddingVertical2: {
      paddingVertical: 2,
    },
    paddingVertical4: {
      paddingVertical: 4,
    },
    paddingVertical6: {
      paddingVertical: 6,
    },
    paddingVertical8: {
      paddingVertical: 8,
    },
    paddingVertical10: {
      paddingVertical: 10,
    },
    paddingVertical12: {
      paddingVertical: 12,
    },
    paddingVertical14: {
      paddingVertical: 14,
    },
    paddingVertical16: {
      paddingVertical: 16,
    },
    paddingVertical18: {
      paddingVertical: 18,
    },
    paddingVertical20: {
      paddingVertical: 20,
    },
    paddingVertical22: {
      paddingVertical: 22,
    },
    paddingVertical24: {
      paddingVertical: 24,
    },
    overFlowScroll: {
      overflow: 'scroll',
    },
    positionAbsolute: {
      position: 'absolute',
    },
    positionRelative: {
      position: 'relative',
    },
    zIndexNMax: {
      zIndex: -9999,
    },
    zIndexN50: {
      zIndex: -50,
    },
    zIndexN40: {
      zIndex: -40,
    },
    zIndexN20: {
      zIndex: -20,
    },
    zIndexN10: {
      zIndex: -10,
    },
    zIndexN5: {
      zIndex: -5,
    },
    zIndex0: {
      zIndex: 0,
    },
    zIndexPMax: {
      zIndex: 9999,
    },
    zIndexP50: {
      zIndex: 50,
    },
    zIndexP40: {
      zIndex: 40,
    },
    zIndexP20: {
      zIndex: 20,
    },
    zIndexP10: {
      zIndex: 10,
    },
    zIndexP5: {
      zIndex: 5,
    },
    shadowLight: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    shadowMedium: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 5,
    },
    shadowDark: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 10,
    },
    shadowTooDark: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 6},
      shadowOpacity: 0.7,
      shadowRadius: 6,
      elevation: 15,
    },
  });
}
