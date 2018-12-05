import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Firebase from '../Firebase.js';

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

  }

  onRegister = () => {
    const { email, password } = this.state;
    (this.state.password === this.state.passwordRepeated) ? 
      Firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
          console.log('New user is', user)
        }).catch((error) => {
          const { code, message } = error;
          console.log(error)
        }) : console.log("Password mismatch!")
    }
  
  
  SubmitNewUSer = () => { 
    this.onRegister()
  }

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


export default createBottomTabNavigator({
  Profile :{screen: SignUp},
  Social:{screen: SocialSection},
  Settings:{screen: SettingsSection}
}, 
  {initialRouteName: 'Profile',}
);

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