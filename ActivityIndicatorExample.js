import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

class ActivityIndicatorExample extends React.Component {

  state = {
    animating: true
  }

  closeActivityIndicator = () => setTimeout(() => this.setState({ animating: false }), 60000);

  componentDidMount = () => this.closeActivityIndicator();

  render() {
    const animating = this.state.animating;
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={animating}
          color='green'
          size='large'
          style={styles.activityIndicator}
        ></ActivityIndicator>
      </View >
    )
  }
};

export default ActivityIndicatorExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
})