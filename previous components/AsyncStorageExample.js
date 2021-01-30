import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage'

export default class AsyncStorageExample extends React.Component {

  state = {
    name: ''
  }

  setName = (name) => {
    this.setState({ name: name })
    AsyncStorage.setItem('name', name)
  }

  getMyStringValue = async () => {
    try {
      return await AsyncStorage.getItem('name')
    } catch (e) {
      // read error
    }
  }
  componentDidMount() {
    this.getMyStringValue()
      .then(name => this.setState({ name }));
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={this.setName}
          style={styles.textInput}
        />
        <Text>{this.state.name}</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  textInput: {
    margin: 5,
    height: 100,
    width: 150,
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: 'darkred',
    color: 'white',
    textAlign: 'center'
  }
});