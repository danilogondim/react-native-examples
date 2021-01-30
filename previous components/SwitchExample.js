import React from 'react';
import { Switch, View, StyleSheet } from 'react-native';

const SwitchExample = (props) => {
  return (
    <View style={styles.container}>
      <Switch 
      value={props.switchOneValue}
      onValueChange={props.toggleSwitchOne}
      ></Switch>
    </View>
  )
};

export default SwitchExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100
  },
});