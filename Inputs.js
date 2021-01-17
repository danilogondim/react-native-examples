import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

class Inputs extends React.Component {

  state = {
    email: 'a@a.com',
    password: 'Password1'
  }

  handleEmail = (text) => {
    this.setState({ email: text });
  }

  handlePassword = (text) => {
    this.setState({ password: text });
  }

  login = (email, password) => {
    alert("email: " + email + " password: " + password);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="blue"
          onChangeText={this.handleEmail}></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="blue"
          onChangeText={this.handlePassword}></TextInput>
        <TouchableOpacity style={styles.submitButton} onPress={() => this.login(this.state.email, this.state.password)}>
          <Text style={styles.submitButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Inputs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: 'salmon',
    padding: 10,
    margin: 15,
    height: 40
  },
  submitButtonText: {
    color: 'white',

  }
})