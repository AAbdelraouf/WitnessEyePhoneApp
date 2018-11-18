import React, { Component } from 'react';
import { TouchableOpacity, Text, View, TouchableHighlight } from 'react-native';
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
    // this.returnTest        = this.returnTest.bind(this);

  }

// returnTest = () => {
//   if (1 < 10) { return <View>{ <SendDataToFirebase caseType ="CaseTypeTest!" /> }</View> }
//          else { return <View><Text>No it is not</Text></View> }
// };

goToSocialSection = () => {
    Actions.WriteWitnessSession()
    // return <SendDataToFirebase caseType ="Case type" />
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


      <SendDataToFirebase caseType ="Casetype" />

      {/* {this.returnTest()} */}
      
      </View>
     );
  }
}
 
export default CaseType;