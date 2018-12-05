import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';

import Firebase from './Components/Firebase.js';



class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      email:"",
      password:"",
      passwordRepeated:""
    }

    this.SubmitNewUSer =  this.SubmitNewUSer.bind(this);
    this.onRegister    =  this.onRegister.bind(this);
    // this.StoreEmailInputValueInState = this.StoreEmailInputValueInState.bind(this);

  }

  onRegister = () => {
    const { email, password } = this.state;
    (this.state.password === this.state.passwordRepeated) ? 
      Firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
          // If you need to do anything with the user, do it here
          // The user will be logged in automatically by the
          // `onAuthStateChanged` listener we set up in SignUp.js earlier
          alert('New user is', user)
        })
        .catch((error) => {
          const { code, message } = error;
          // For details of error codes, see the docs
          // The message contains the default Firebase string
          // representation of the error
          alert(error)

        }) : alert("Password mismatch!")
    }
  
  
  SubmitNewUSer = () => { 
    // alert(this.state.email)
    this.onRegister()
  }

  // StoreEmailInputValueInState = (e) => {
  //   this.setState({ e: ""})
  // }

  render(){
    return (
      // imported WitnessSessionRoute
      <View style={styles.container} >
      
      
      <Text>
      Profile Section, please sign up
      </Text>

      <TextInput 
        autoCapitalize = "none"
        onChangeText = {(inputValue) => {this.setState({email: inputValue})}}
        placeholder="email" style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}} />
       
      <TextInput 
      onChangeText = {(inputValue) => {this.setState({password: inputValue})}}
      secureTextEntry placeholder="Password" style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}} />

      <TextInput 
      onChangeText = {(inputValue) => {this.setState({passwordRepeated: inputValue})}}
      secureTextEntry placeholder="Password" style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}} />

      <Button title="Submit" onPress={this.SubmitNewUSer}/> 
        
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

// class LoggedIn extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text> LoggedIn </Text>
//       </View>
//     );
//   }
// }d

export default createBottomTabNavigator({
  Profile :{screen: SignUp},
  Social:{screen: SocialSection},
  Settings:{screen: SettingsSection}
}, 
  {initialRouteName: 'Profile',}
);




// const SignUpNavigator = StackNavigator({ 
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