import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

class PickerExample extends React.Component {

  state = {
    user: ''
  }

  updateUser = (user) => {
    this.setState({ user: user })
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker 
          selectedValue={this.state.user}
          onValueChange={this.updateUser}
          style={{height: 100, width: 200}}
        >
          <Picker.Item label='Danilo' value='Danilo'></Picker.Item>
          <Picker.Item label='Siva' value='Siva'></Picker.Item>
          <Picker.Item label='Harsh' value='Harsh'></Picker.Item>
        </Picker>
        <Text style={styles.text}>{this.state.user}</Text>
      </View>
    );
  }
};

export default PickerExample;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red',
  },
  container: {
    marginTop: 100,
    flex: 1,
    alignItems: 'center'
  }
})