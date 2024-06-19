/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';

import HomeScreen from '../src/screens/home';

import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

const Navigator = createStaticNavigation(RootStack);

describe('App Navigation', () => {
  it('renders the App component correctly', () => {
    renderer(
      <Navigator>
        <App />
      </Navigator>,
    );
  });

  // Add more tests as needed
});
