import React from 'react';
import {
  Button,
  NativeModules,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

const {SunmiModule} = NativeModules;

function App(): React.JSX.Element {
  const handleOnPressed = () => {
    SunmiModule.createsSampleLog('Sample stupid testing.');
  };
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>This is sample text</Text>
          <Button
            title="Sunmi Printer Module testing."
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            onPress={handleOnPressed}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
