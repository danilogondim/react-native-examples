import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';


export default class HomeScreen extends React.Component {

  render() {
    return (
      <>
        <Text>HomeScreen</Text>
        <Button title="Add friends" onPress={() => this.props.navigation.navigate('Friends')}></Button>
      </>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 100
  },
});