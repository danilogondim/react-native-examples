import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';



class List extends React.Component {

  state = {
    names: [
      {
        id: 0,
        name: 'Danilo'
      },
      {
        id: 1,
        name: 'Harsh'
      },
      {
        id: 2,
        name: 'Shiva'
      },
      {
        id: 3,
        name: 'Sara'
      }
    ]
  }

  alertItemName = (item) => {
    alert(item.name);
  }

  render() {
    return (
      <View>{
        this.state.names.map((item, index) => (
          <TouchableOpacity key={item.id} onPress={() => this.alertItemName(item)} style={styles.container}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))
      }
      </View>
    )
  }
}

export default List;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  text: {
    color: 'white',

  }
});
