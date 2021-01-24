import React from 'react';
import { Animated, TouchableOpacity, StyleSheet } from 'react-native';

class Animation extends React.Component {

  componentWillMount = () => {
    this.animatedWidth = new Animated.Value(50)
    this.animatedHeight = new Animated.Value(100)
  }

  animatedBox = () => {
    Animated.timing(this.animatedWidth, { toValue: 200, duration: 1000 }).start()
    Animated.timing(this.animatedHeight, { toValue: 500, duration: 500 }).start()
  }

  render() {
    const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight };

    return (
      <TouchableOpacity style={styles.container} onPress={this.animatedBox}>
        <Animated.View style={[styles.box, animatedStyle]}></Animated.View>
      </TouchableOpacity>
    )
  }
};

export default Animation;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'grey',
    width: 50,
    height: 100
  }
});