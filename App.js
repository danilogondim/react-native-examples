import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import PickerExample from './PickerExample';
import AsyncStorageExample from './AsyncStorageExample';
import DisplayName from './DisplayName';
import Animation from './Animation';


class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        {/* <PickerExample></PickerExample> */}
        {/* <AsyncStorageExample></AsyncStorageExample> */}
        {/* <DisplayName name='Danilo' color='red'></DisplayName>
        <DisplayName name='Gondim' color='blue'></DisplayName> */}
        <Animation></Animation>

      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 100
  },
});