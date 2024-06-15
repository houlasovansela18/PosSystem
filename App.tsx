import React from 'react';
import {
  Button,
  NativeModules,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import useAppStyle from './src/styles/app-style';
import { __debug__, __appname__ } from './src/configs/app-utils';

const { SunmiModule } = NativeModules;

function App(): React.JSX.Element {
  const sysColorScheme = useColorScheme();
  if (__debug__ || __DEV__) {
    console.debug('application-name:', __appname__);
    console.debug('color-scheme:', sysColorScheme);
  }
  const style = useAppStyle();
  const handleOnPressed = () => {
    SunmiModule.initPrinter();
    SunmiModule.printBitmap(
      'https://chatgpt.com/images/chatgpt-icon-144x144.png',
    );
  };
  return (
    <SafeAreaView
      style={[
        style.flex1,
        style.displayFlex,
        style.backgroundColorPrimary,
        style.paddingVertical8,
        style.alignItemsCenter,
        style.justifyContentCenter,
      ]}>
      <Button
        title="Get device model"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        onPress={handleOnPressed}
      />
    </SafeAreaView>
  );
}

export default App;
