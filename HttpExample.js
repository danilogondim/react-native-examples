import React from 'react';
import { View, Text } from 'react-native';



class HttpExample extends React.Component {

  state = {
    data: '',
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/posts/1 ', { method: 'GET' })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({ data: responseJson })
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <View>
        <Text>
          {this.state.data.body}
        </Text>
      </View>
    )
  }

}

export default HttpExample;