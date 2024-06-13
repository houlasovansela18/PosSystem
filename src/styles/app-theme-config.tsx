import {AppColorTheme} from '../types';
import {
  BorderWidthConstrain,
  FontSizeConstrain,
  RadiusSizeConstrain,
} from '../types/app-base';

export class AppThemeConfig {
  public static ColorConfig: AppColorTheme = {
    light: {
      primary: '#6200EA', // Deep Purple 500
      secondary: '#03DAC6', // Teal 200
      disabled: '#BDBDBD', // Grey 400
      info: '#2196F3',
      warning: '#FFC107',
      error: '#B00020', // Red 700
      success: '#388E3C', // Green 700
      textPrimary: '#212121', // Grey 900
      textSecondary: '#757575', // Grey 600
      backgroundPrimary: '#FFFFFF', // White
      backgroundSecondary: '#F5F5F5', // Grey 100
      shadow: 'rgba(0, 0, 0, 0.2)',
    },
    dark: {
      primary: '#BB86FC', // Deep Purple A200
      secondary: '#03DAC6', // Teal 200
      disabled: '#616161', // Grey 700
      info: '#2196F3',
      warning: '#FFC107',
      error: '#CF6679', // Red 400
      success: '#4CAF50', // Green 500
      textPrimary: '#E0E0E0', // Grey 300
      textSecondary: '#BDBDBD', // Grey 400
      backgroundPrimary: '#121212', // Dark Grey
      backgroundSecondary: '#1E1E1E', // Almost Black
      shadow: 'rgba(0, 0, 0, 0.5)',
    },
  };
  public static FontSizeConfig: FontSizeConstrain = {
    h1: 36,
    h2: 30,
    h3: 24,
    h4: 20,
    h5: 18,
    h6: 16,
    subHeading: 22, // Subheading
    body: 14, // Standard paragraph text
    smallText: 12, // Small text
    extraSmallText: 10, // Extra small text
    caption: 8, // Caption or fine print
  };
  public static RadiusSizeConfig: RadiusSizeConstrain = {
    '2dp': 2,
    '4dp': 4,
    '8dp': 8,
    '12dp': 12,
    '16dp': 16,
    '24dp': 24,
    '32dp': 32,
    '48dp': 48,
  };
  public static BorderWidthConfig: BorderWidthConstrain = {
    none: 0,
    hairline: 1,
    thin: 2,
    light: 3,
    medium: 4,
    semibold: 5,
    bold: 6,
    thick: 7,
    heavy: 8,
    extraHeavy: 9,
    ultraHeavy: 10,
  };
  public static OpacityLevelConfig = {
    FULL: 1,
    HIGH: 0.9,
    MEDIUM: 0.5,
    LOW: 0.3,
    TRANSPARENT: 0,
  };
}
