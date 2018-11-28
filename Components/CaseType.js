import React, { Component } from 'react';
import { TouchableOpacity, Text, Button, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

import SendDataToFirebase from './SendDataToFirebase.js'

import Firebase from './Firebase.js';

class CaseType extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      AutoAccident : "Auto",
      Assault : "Assault",
      Robbery : "Robbery",
      NaturalDisasters : "Natural Distasters",
      clickedElement : ""
     };

     

    this.goToSocialSection = this.goToSocialSection.bind(this);
  }


  goToSocialSection = (cElement) => {
    Actions.WriteWitnessSession();
    // ------------------------- //
    this.setState({ clickedElement: cElement });
}

  render() { 

    return ( 
      <View>
      
      <TouchableOpacity >
         <Button title = {this.state.AutoAccident} onPress = {(cElement) => this.goToSocialSection(this.state.AutoAccident) }> </Button>
      </TouchableOpacity>

      <TouchableOpacity >
        <Button title = {this.state.Assault} onPress = { (cElement) => this.goToSocialSection(this.state.Assault)} > </Button>
      </TouchableOpacity>

      <TouchableOpacity >
         <Button title = {this.state.Robbery} onPress = { (cElement) => this.goToSocialSection(this.state.Robbery)} > </Button>
      </TouchableOpacity>

      <TouchableOpacity >
         <Button title = {this.state.NaturalDisasters} onPress = {(cElement) => this.goToSocialSection(this.state.NaturalDisasters)} > </Button>
      </TouchableOpacity>

      <SendDataToFirebase selectedCaseType ={this.state.clickedElement + " selected"} />


      </View>
     );
  }
}
 
export default CaseType;

// const styles = StyleSheet.create({
//    text: {
//       fontSize: 30,
//       alignSelf: 'center',
//       color: 'red'
//    }
// })



// alert = (msg) => {
//   console.log(msg)
// }

// onDeleteBTN = () => {
//   this.alert(' OnDelete')
// }

// render() {
//   return (
//     <View style={styles.container}>
//       <Button
//         title="Delete Record"
//         onPress={() => Alert.alert(
//           'Alert Title',
//           'alertMessage',
//           [
//             {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
//             {text: 'OK', onPress: this.onDeleteBTN},
//           ],
//           { cancelable: false }
//         )}
//       />
//     </View>
//   );
// }