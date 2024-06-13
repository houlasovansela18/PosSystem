import {ColorSchemeName} from 'react-native/types';

export type SupportedThemes = Extract<ColorSchemeName, 'light' | 'dark'>;

export type ColorThemeConstrains = {
  primary: string;
  secondary: string;
  disabled: string;
  info: string;
  warning: string;
  error: string;
  success: string;
  textPrimary: string;
  textSecondary: string;
  backgroundPrimary: string;
  backgroundSecondary: string;
  shadow: string;
};

export type FontSizeConstrain = {
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
  subHeading: number; // Subheading
  body: number; // Standard paragraph text
  smallText: number; // Small text
  extraSmallText: number; // Extra small text
  caption: number; // Caption or fine print
};

export type SupportedRadiusSizes =
  | '2dp'
  | '4dp'
  | '8dp'
  | '12dp'
  | '16dp'
  | '24dp'
  | '32dp'
  | '48dp';

export type RadiusSizeConstrain = {
  [key in SupportedRadiusSizes]: number;
};

export type BorderWidthSize =
  | 'none'
  | 'hairline'
  | 'thin'
  | 'light'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'thick'
  | 'heavy'
  | 'extraHeavy'
  | 'ultraHeavy';

export type BorderWidthConstrain = {
  [key in BorderWidthSize]: number;
};

export type AppColorTheme = {
  [key in SupportedThemes]: ColorThemeConstrains;
};
