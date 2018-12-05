import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import WitnessSessionRoute from './Components/WitnessSessionRoute.js';
import { createBottomTabNavigator } from 'react-navigation';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};

    this.determine = this.determine.bind(this)
  }

  determine = () => {
    (1 < 10) ? <View><Text> Welcome! </Text> </View>  : <View><Text> Not Welcome! </Text> </View>
  }
  
  render(){
    
    return (
      // imported WitnessSessionRoute
      <View style={styles.container} >
      {/* <Text>
      Profile Section
      </Text> */}
      {this.determine}
      </View>
    );
  }
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

// const AppNavigator = StackNavigator({ 
//   HomeScreen:{screen: HomeScreen},
//   LoginScreen:{screen: LoginScreen},
//   forgotPasswordScreen:{screen: forgotPasswordScreen}
// },
// {
//   index: 0,
//   initialRouteName: 'LoginScreen',
//   headerMode: 'none',
//   navigationOptions: { gesturesEnabled: false}
// })

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