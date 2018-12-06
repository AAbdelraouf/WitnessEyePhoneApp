

import React, { Component } from 'react';
import { TouchableOpacity, Text, Button, View, StyleSheet, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

// import SendDataToFirebase from './SendDataToFirebase.js';
// import RetrieveDataFromFirebase from './RetrieveDataFromFirebase.js';
// import Firebase from './Firebase.js';

class Settings extends Component {
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
      // this.setState({ startForum : "edbraouf"  })
      Actions.CaseType();
    //   Actions.WriteWitnessSession();
   }

   render(){
    return (
    <View style = {styles.container} >

      <Text onPress = {this.goToSettingsSection} > Try now! </Text>
        
    </View>
     )
   }
}

export default Settings;


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




