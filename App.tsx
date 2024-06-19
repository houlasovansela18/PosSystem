import React from 'react';

import { __debug__, __appname__ } from './src/configs/app-utils';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';

import HomeScreen from './src/screens/home';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerStyle: { backgroundColor: 'black' },
    headerTitleStyle: { color: 'white' },
  },
  screens: {
    Home: {
      screen: HomeScreen,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

function App(): React.JSX.Element {
  const sysColorScheme = useColorScheme();
  if (__debug__ || __DEV__) {
    console.debug('application-name:', __appname__);
    console.debug('color-scheme:', sysColorScheme);
  }
  return <Navigation />;
}

export default App;
