import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import StatusBarExample from './StatusBarExample';
import ModalExample from './ModalExample';
import ActivityIndicatorExample from './ActivityIndicatorExample';
import SwitchExample from './SwitchExample';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      switchOneValue: true
    }
  }
  toggleSwitchOne = (value) => {
    this.setState({ switchOneValue: value })
    console.log('switchOne is: ' + value)
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBarExample></StatusBarExample>
        <ModalExample></ModalExample>
        <ActivityIndicatorExample></ActivityIndicatorExample> */}
        <SwitchExample
          toggleSwitchOne={this.toggleSwitchOne}
          switchOneValue={this.state.switchOneValue}
        ></SwitchExample>
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    borderWidth: 1,
    padding: 25,
    borderColor: 'black',
    backgroundColor: 'red'
  }
});