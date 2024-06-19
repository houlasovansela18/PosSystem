// __tests__/App.test.tsx
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import App from '../App'; // Adjust the path if necessary
const __debug__ = true;
const __appname__ = 'SO Management';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    createStaticNavigation: jest
      .fn()
      .mockReturnValue(({ children }) => children),
  };
});

jest.mock('@react-navigation/native-stack', () => {
  return {
    createNativeStackNavigator: jest.fn().mockReturnValue({
      Navigator: jest.fn(({ children }) => children),
      Screen: jest.fn(() => null),
    }),
  };
});

describe('App', () => {
  it('renders correctly and displays debug information if in debug mode', async () => {
    const debugSpy = jest
      .spyOn(global.console, 'debug')
      .mockImplementation(() => {});

    render(<App />);

    await waitFor(() => {
      if (__debug__ || __DEV__) {
        expect(debugSpy).toHaveBeenCalledWith('application-name:', __appname__);
        expect(debugSpy).toHaveBeenCalledWith('color-scheme:', 'light');
      }
    });

    debugSpy.mockRestore();
  });

  it('renders HomeScreen correctly', () => {
    render(<App />);
  });
});
