import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import WitnessSessionRoute from './Components/WitnessSessionRoute.js';
import { createBottomTabNavigator } from 'react-navigation';

import Firebase from './Components/Firebase.js';



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {  }

    this.SubmitNewUSer =  this.SubmitNewUSer.bind(this);
  }

  SubmitNewUSer = () => {  }

  render(){
    return (
      // imported WitnessSessionRoute
      <View style={styles.container} >
      
      
      <Text>
      Profile Section, please sign up
      </Text>

      <TextInput placeholder="email" style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}} />
      <TextInput secureTextEntry placeholder="Password" style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}} />
      <TextInput secureTextEntry placeholder="Password" style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}} />

      <Button title="Submit" onPress={this.SubmitNewUSer}> 

        </Button>

        
        



      
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

class LoggedIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> LoggedIn </Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Profile :{screen: App},
  Social:{screen: SocialSection},
  Settings:{screen: SettingsSection}
}, 
  {initialRouteName: 'Profile',}
);




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