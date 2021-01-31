import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animation from './Animation';
import AsyncStorageExample from './previous components/AsyncStorageExample';
import Header from './Header';
import Container from './Container';

class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        {/* <Animation></Animation> */}
        {/* <AsyncStorageExample></AsyncStorageExample> */}
        {/* <Header favoriteColor="yellow"></Header> */}
        <Container></Container>
      </View>
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