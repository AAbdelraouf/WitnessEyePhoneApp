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
            startForum: ""
        }

    // this.createSessionInState = this.createSessionInState.bind(this);
    this.goToSettingsSection  = this.goToSettingsSection.bind(this);
}

goToSettingsSection = () => {
      this.setState({ startForum : "edbraouf"  })
      Actions.CaseType();
   }

   render(){
    return (
    <View>

        <View>
        <TouchableOpacity >
           <Button title = "+ Start witness session" onPress = {this.goToSettingsSection} > </Button >
        </TouchableOpacity>
        
        <SendDataToFirebase data = {this.state.startForum} />


        </View>
        
    </View>
     )
   }
}

export default SocialSection;