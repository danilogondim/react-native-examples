import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PresentationalComponent from './PresentationalComponent';

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
      <View style={styles.container}>
        <PresentationalComponent
          updateState={this.updateState}
          name={this.state.name}
          place={this.state.place}
        ></PresentationalComponent>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
