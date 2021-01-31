import React from 'react';
import { View, Alert, Text, StyleSheet } from 'react-native';

export default class GeolocationExample extends React.Component {

  state = {
    initialPosition: 'unknown',
    finalPosition: 'unknown',
  }

  watchId = null;

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const initialPosition = JSON.stringify(position);
        this.setState({ initialPosition });
      },
      (error) => Alert.alert(error.message),
      {
        enableHighAccuracy: true,
        timeOut: 20000,
        maximumAge: 60000
      }
    )
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        const lastPosition = JSON.stringify(position);
        this.setState({ lastPosition })
      },
      (error) => this.setState({ lastPosition: error.message })
      // Alert.alert(error.message),
    )
  };

  componentWillUnmount = () => {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Initial position:</Text>
        <Text style={styles.text}>{this.state.initialPosition}</Text>

        <Text>Current position:</Text>
        <Text style={styles.text}>{this.state.lastPosition}</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50
  },
  text: {
    fontSize: 24,
    color: 'red'
  }
})