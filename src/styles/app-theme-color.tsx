import { useColorScheme } from 'react-native';
import { AppThemeConfig } from '../configs/app-theme';

export default function useThemeColor() {
  const sysColorScheme = useColorScheme();
  console.debug('theme-preference:', sysColorScheme);
  return AppThemeConfig.ColorConfig[sysColorScheme || 'dark'];
}
