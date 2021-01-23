import React from 'react';
import { Alert, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AlertExample = () => {

  const showAlert = () => {
    Alert.alert("Danilo")
  };

  return (
    <TouchableOpacity style={styles.button}>
      <Text onPress={showAlert}>
        Alert
      </Text>
    </TouchableOpacity>
  )
};

export default AlertExample;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'grey',
    width: 100,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 100
  }
});