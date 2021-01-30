import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default class Container extends React.Component {

  constructor(props) {

    super(props)
    this.state = {
      show: true
    }
  }

  deleteHeader = () => {
    this.setState({ show: false })
  }

  render() {
    let myHeader;
    if (this.state.show) {
      myHeader = <Child></Child>
    }
    return (
      <View style={styles.container}>
        {myHeader}
        <Button title="delete header"
          color='blue'
          onPress={this.deleteHeader} ></Button>
      </View>
    )
  }
}


class Child extends React.Component {

  componentWillUnmount = () => {
    Alert.alert('This component is about to be unmounted!')
  }

  render() {
    return (
      <View>
        <Text>
          This is a random text
        </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: 'red',
    width: 100,
    height: 100
  },
})