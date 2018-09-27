import React, { Component } from 'react';
import { View, Text,  } from 'react-native';

class PropsTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text>
          {this.props.test}
          </Text>
      </View>
    );
  }
}

export default PropsTest;
