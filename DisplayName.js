import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DisplayName = ({ name, color }) => {
  const styles = StyleSheet.create({
    text: {
      color,
      marginTop: 5
    }
  })
  return (
    <View>
      <Text style={styles.text}>
        {name}
      </Text>
    </View>
  )
}

export default DisplayName;

