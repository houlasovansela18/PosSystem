import React from 'react';

import { __debug__, __appname__ } from './src/configs/app-utils';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import RootStack from './src/navigator/root-stack';

export default function App(): React.JSX.Element {
  const sysColorScheme = useColorScheme();
  if (__debug__ || __DEV__) {
    console.debug('application-name:', __appname__);
    console.debug('color-scheme:', sysColorScheme);
  }
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
