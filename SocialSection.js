import React, { Component } from 'react';
import { TouchableOpacity, Text, Button, View, StyleSheet, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

import SendDataToFirebase from './SendDataToFirebase.js';

import Firebase from './Firebase.js';

class SocialSection extends Component {

constructor(props){
    super(props);
    
    this.state = {
            // propsToSendDataToFirebase: this.createSessionInState
            StartForum: ""
        }


    this.createSessionInState = this.createSessionInState.bind(this);
    // this.goToSettingsSection  = this.goToSettingsSection.bind(this);
}

createSessionInState = () => { 
    // Actions.CaseType();
    this.setState({ name:'Ahmed', age: 28 });
    alert("Hi")
}

goToSettingsSection = () => {
      this.setState({ StartForum : "start"  })
      Actions.CaseType();
   }

   render(){
    return (
    <View>

        <View>
        <TouchableOpacity >
           <Button title = "+ Start witness session" onPress = {this.goToSettingsSection} > </Button >
        </TouchableOpacity>
        
        <SendDataToFirebase data = {this.state.StartForum} />


        </View>
        
    </View>
     )
   }
}

export default SocialSection;