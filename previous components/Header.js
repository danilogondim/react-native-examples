import React from 'react';
import { Text, Button } from 'react-native';



export default class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      favoriteColor: 'red'
    }
  }

  componentDidMount = () => {
    setTimeout(() => this.setState({ favoriteColor: 'blue' }), 2000)
  }

  // static getDerivedStateFromProps(props, state) {
  //   return { favoriteColor: props.favoriteColor }
  // }

  changeColor = () => {
    this.setState({ favoriteColor: 'grey' })
  }

  // shouldComponentUpdate() {
  //   return false
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById('text1').innerHTML = `before the update favorite was: ${prevState.favoriteColor}`
    document.getElementById('text2').innerHTML = `after the update favorite was: ${this.state.favoriteColor}`
  }



  render() {
    return (
      <>
        <Text>My favorite color is: {this.state.favoriteColor}</Text>

        <Text nativeID='text1'>Text number 1</Text>
        <Text nativeID='text2'>Text number 2</Text>

        <Button title="change to grey" onPress={this.changeColor}></Button>
      </>
    )
  }
}