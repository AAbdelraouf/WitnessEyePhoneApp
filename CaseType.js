import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import SendDataToFirebase from './SendDataToFirebase.js'


class CaseType extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      AutoAccident : "Auto",
      Assault : "Assault",
      Robbery : "Robbery",
      NaturalDisasters : "Natural Distasters"
     };

    this.goToSocialSection = this.goToSocialSection.bind(this);
    this.begin = this.begin.bind(this);
  }

goToSocialSection = () => {
    Actions.WriteWitnessSession()
    // return <SendDataToFirebase caseType ="Case type" />
 }

 begin = () => {
  alert(this.props.caseType);
}



  render() { 
    return ( 
      <View>
      
      <TouchableOpacity onPress = {this.goToSocialSection}>
         <Text>{this.state.AutoAccident}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {this.goToSocialSection}>
        <Text>{this.state.Assault}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {this.goToSocialSection}>
         <Text>{this.state.Robbery}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {this.goToSocialSection}>
         <Text>{this.state.NaturalDisasters}</Text>
      </TouchableOpacity>

      {/* <SendDataToFirebase caseType ="Case type" /> */}
      
      </View>
     );
  }
}
 
export default CaseType;