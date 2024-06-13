import {useColorScheme} from 'react-native';
import {AppThemeConfig} from './app-theme-config';

export default function useThemeColor() {
  const sysColorScheme = useColorScheme();
  console.debug('theme-preference:', sysColorScheme);
  return AppThemeConfig.ColorConfig[sysColorScheme || 'dark'];
}
