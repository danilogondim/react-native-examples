import React from 'react';
import { StyleSheet, View } from 'react-native';
import GeolocationExample from './GeolocationExample';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// for navigation:
// npm install @react-navigation/native@5.7.3
// npm install @react-navigation/stack@5.9.0 @react-native-community/masked-view@0.1.10 react-native-screens@2.10.1 react-native-safe-area-context@3.1.4 react-native-gesture-handler@1.7.0 

class App extends React.Component {

  render() {
    return (
      <>
        <GeolocationExample></GeolocationExample>
      </>
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