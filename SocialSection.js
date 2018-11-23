import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

// import SendDataToFirebase from './SendDataToFirebase.js';

class SocialSection extends Component {

constructor(props){
    super(props);
    
    this.state = {
            propsToSendDataToFirebase: this.createSessionInState
        }
    // this.createSessionInState = this.createSessionInState.bind(this);
    this.goToSettingsSection  = this.goToSettingsSection.bind(this);
}

goToSettingsSection = () => {
      Actions.CaseType()
   }

   render(){
    return (
    <View>

        <View>
        <TouchableOpacity onPress = {this.goToSettingsSection}>
           <Text>+ Start witness session</Text>
        </TouchableOpacity>

        </View>
        
    </View>
     )
   }
}

export default SocialSection;