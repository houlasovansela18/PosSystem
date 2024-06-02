import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>This is sample text</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
