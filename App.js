import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animation from './Animation';


class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Animation></Animation>

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