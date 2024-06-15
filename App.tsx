import React from 'react';
import { Button, NativeModules, SafeAreaView } from 'react-native';
import useAppStyle from './src/styles/app-style';

const { SunmiModule } = NativeModules;

function App(): React.JSX.Element {
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
