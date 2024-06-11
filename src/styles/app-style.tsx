import {StyleSheet, useColorScheme} from 'react-native/types';
import {AppThemeConfig} from './app-theme-config';

export default function useAppStyle() {
  const sysColorScheme = useColorScheme();
  const colorConfig = AppThemeConfig.ColorConfig[sysColorScheme || 'dark'];
  const radiusSizeConfig = AppThemeConfig.RadiusSizeConfig;
  const borderWidth = AppThemeConfig.BorderWidthConfig;
  const opacityLevel = AppThemeConfig.OpacityLevelConfig;

  const AppViewStyle: StyleSheet.NamedStyles<any> = {
    backfaceVisibilityVisible: {
      backfaceVisibility: 'visible',
    },
    backfaceVisibilityHidden: {
      backfaceVisibility: 'hidden',
    },
    backgroundColorPrimary: {
      backgroundColor: colorConfig.backgroundPrimary,
    },
    backgroundColorSecondary: {
      backgroundColor: colorConfig.backgroundSecondary,
    },
    borderColorPrimary: {
      borderColor: colorConfig.primary,
    },
    borderColorSecondary: {
      borderColor: colorConfig.secondary,
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
  };
  const AppTextStyle: StyleSheet.NamedStyles<any> = {};
  return StyleSheet.compose(AppViewStyle, AppTextStyle);
}
