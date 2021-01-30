import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import List from './List';
import Inputs from './Inputs';
import ScrollViewExample from './ScrollViewExample';
import HttpExample from './HttpExample';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// state is mutable (state can be updated later)
// props is immutable (can't be updated)

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Danilo",
      place: "Toronto"
    }
  }
  // always use setState to update state, so that react knows that it needs to render the component again
  updateState = () => this.setState({ name: "Harsh", place: "Mumbai" })


  // render = one of the life cycles of a component
  render() {
    return (
      // <View style={styles.container}>
      //   <View style={styles.redBox}></View>
      //   <View style={styles.blueBox}></View>
      //   <View style={styles.blackBox}></View>
      // </View>

      <View>
        {/* <List /> */}
        {/* <Inputs /> */}
        {/* <ScrollViewExample /> */}
        <HttpExample />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'grey',
    height: 600,
  },
  redBox: {
    height: 100,
    width: 100,
    backgroundColor: 'red'
  },
  blueBox: {
    height: 100,
    width: 100,
    backgroundColor: 'blue'
  },
  blackBox: {
    height: 100,
    width: 100,
    backgroundColor: 'black'
  }
});
