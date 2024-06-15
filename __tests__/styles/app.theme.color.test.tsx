import { useColorScheme } from 'react-native';
import useThemeColor from '../../src/styles/app-theme-color';
import { AppThemeConfig } from '../../src/configs/app-theme';

// Mock useColorScheme hook
jest.mock('react-native', () => ({
  useColorScheme: jest.fn(),
}));

describe('useThemeColor', () => {
  it('returns correct primary color for light color scheme', () => {
    (useColorScheme as jest.Mock).mockReturnValueOnce('light');

    const color = useThemeColor();
    expect(color).toEqual(AppThemeConfig.ColorConfig.light);
  });

  it('returns correct primary color for dark color scheme', () => {
    (useColorScheme as jest.Mock).mockReturnValueOnce('dark');

    const color = useThemeColor();
    expect(color).toEqual(AppThemeConfig.ColorConfig.dark);
  });

  it('returns default primary color (dark mode) when color scheme is undefined', () => {
    (useColorScheme as jest.Mock).mockReturnValueOnce(undefined);

    const color = useThemeColor();
    expect(color).toEqual(AppThemeConfig.ColorConfig.dark);
  });
});
