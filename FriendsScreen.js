import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';


export default class FriendsScreen extends React.Component {
  render() {
    return (
      <>
        <Text>You have friends</Text>
        <Button title="Back to home" onPress={() => this.props.navigation.navigate('Home')}></Button>
      </>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 100,
  },
});