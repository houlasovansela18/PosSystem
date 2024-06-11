import React from 'react';
import {
  Button,
  NativeModules,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

const {SunmiModule} = NativeModules;

function App(): React.JSX.Element {
  const handleOnPressed = () => {
    SunmiModule.initPrinter();
    SunmiModule.printBitmap(
      'https://chatgpt.com/images/chatgpt-icon-144x144.png',
    );
  };
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Button
            title="Get device model"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            onPress={handleOnPressed}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default App;
