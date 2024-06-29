import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import useThemeColor from '../styles/app-theme-color';

const Stack = createNativeStackNavigator();

export default function RootStack(): React.JSX.Element {
  const appTheme = useThemeColor();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: appTheme.backgroundPrimary,
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
