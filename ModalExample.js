import React from 'react';
import { Modal, TouchableHighlight, View, StyleSheet, Text } from 'react-native';


class ModalExample extends React.Component {

  state = {
    modelVisible: false,
  }

  toggleModel(visible) {
    this.setState({ modelVisible: visible })
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType={'slide'}
          visible={this.state.modelVisible}
          onRequestClose={() => console.log("modal has been closed")}
        >
          <View style={styles.modal}>
            <Text style={styles.text}>Modal is open</Text>
            <TouchableHighlight onPress={() => this.toggleModel(!this.state.modelVisible)}>
              <Text style={styles.text}>Close modal</Text>
            </TouchableHighlight>
          </View>
        </Modal>
        <TouchableHighlight onPress={() => this.toggleModel(true)}>
          <Text style={styles.text}>Open modal</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

export default ModalExample;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 100
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 100
  },
  text: {
    color: 'white',
    marginTop: 10
  }
})