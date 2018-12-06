import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, View} from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';
import { Actions } from 'react-native-router-flux';
import WitnessSessionRoute from './Components/WitnessSessionRoute.js';
import SignUpPage from './Components/Users/SignUpPage.js';
import Profile from './Profile.js';
import Settings from './Settings.js'
// import ScreensNavigator from './ScreensNavigator.js'

class App extends Component {    
  render(){
    return (
      <Profile />
    );
  }
}


//Bottom navigatior bar //
export default createBottomTabNavigator({
  Profile : {screen: Profile},
  Social : {screen: WitnessSessionRoute},
  Settings : {screen: Settings},
}, 
  {initialRouteName: 'Settings'}
);

// const WitnessSessionRoute = StackNavigator({ 
//   SocialSection : {screen: SocialSection},
//   CaseType : {screen: CaseType},
//   App : {screen: App}
// },
// {
//   index: 0,
//   initialRouteName: 'SocialSection',
//   headerMode: 'none',
//   navigationOptions: { gesturesEnabled: false}
// });

// export default App

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