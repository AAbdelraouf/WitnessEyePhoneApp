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

// import React, { Component } from 'react';
// import { View, Text, Picker, StyleSheet } from 'react-native'

// class PickerExample extends Component {
//    constructor(props){
//        super(props);
//        this.state = { stateUser: '' }

//        this.updateUser = this.updateUser.bind(this)
//    }
   
    
//    updateUser = (user) => {
//       this.setState({ stateUser: user })
//    }

//    render() {
//       return (
//          <View>
//             <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
//                <Picker.Item label = "Steve" value = "steve" />
//                <Picker.Item label = "Ellen" value = "ellen" />
//                <Picker.Item label = "Maria" value = "maria" />
//             </Picker>
//             <Text style = {styles.text}>{this.state.stateUser}</Text>
//          </View>
//       )
//    }
// }
// export default PickerExample

// const styles = StyleSheet.create({
//    text: {
//       fontSize: 30,
//       alignSelf: 'center',
//       color: 'red'
//    }
// })