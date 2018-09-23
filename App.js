import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import WitnessSessionRoute from './WitnessSessionRoute.js'
import { createBottomTabNavigator } from 'react-navigation';

const App = () => {
    return (
      // imported WitnessSessionRoute
      <View style={styles.container} >
      <Text>
      Profile Section
      </Text>
      </View>
    );
}

// Tab navigator section //
class SocialSection extends Component {
  render() {
    return (
      // imported WitnessSessionRoute component 
        <WitnessSessionRoute />
    );
  }
}

class SettingsSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Settings Section </Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Profile :{screen: App},
  Social:{screen: SocialSection},
  Settings:{screen: SettingsSection},

});


// styles for above component
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
