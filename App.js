import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Routes from './Routes.js'

import { createBottomTabNavigator } from 'react-navigation';

class App extends Component {
  render() {
    return (
      <Routes />
    );
  }
}



class profileSection extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text> Profile Section </Text>
      </View>
    );
  }
}

class socialSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Social Section </Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  home:{screen: App},
  profile:{screen: profileSection},
  social:{screen: socialSection},
  test:{screen: Test}  

})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
