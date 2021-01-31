import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './HomeScreen';
import FriendsScreen from './FriendsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// for navigation:
// npm install @react-navigation/native@5.7.3
// npm install @react-navigation/stack@5.9.0 @react-native-community/masked-view@0.1.10 react-native-screens@2.10.1 react-native-safe-area-context@3.1.4 react-native-gesture-handler@1.7.0 

class App extends React.Component {

  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="Friends" component={FriendsScreen}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
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