import React, { Component } from 'react';
import {Playtform, StyleSheet, Text, Button, TextInput, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {}
        this.onPressGoToSignUpPage =  this.onPressGoToSignUpPage.bind(this);
      }
      
      onPressGoToSignUpPage = () => { 
        // alert('ss')
        Actions.SocialSection()
      }
    

    render(){
        return (
    
    <View style={styles.container} >
      
      <Button 
      title = "Sign in"
      onPress = { 
        this.onPressGoToSignUpPage
      }></Button>

      </View>

        )
    }
}

export default Profile;

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
      