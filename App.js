import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, TouchableOpacity, StyleSheet, View, Text } from 'react-native';

const App = () => {
  const handlePress = () => false;
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}></Text>
        {/* <Button title="Submit" color="blue" onPress={handlePress} /> */}
      </TouchableOpacity>
    </View>
  )
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