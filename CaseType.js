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
      clickedElement : "TestOne!"
     };

    this.goToSocialSection = this.goToSocialSection.bind(this);
    // this.buttonClickListener = this.buttonClickListener.bind(this);
    this.updateUser = this.updateUser.bind(this);

  }

  updateUser = (user) => {
    this.setState({ clickedElement: user })
 }

  goToSocialSection = () => {
    Actions.WriteWitnessSession();
    // ------------------------- //
    this.setState({ clickedElement: "cElement" });
    alert(this.state.clickedElement)
}

// selectedValue = {this.state.user} onValueChange = {this.updateUser}


  render() { 

    return ( 
      <View>
      
      <TouchableOpacity >
         <Button title = {this.state.AutoAccident} onPress = { (user) => this.updateUser(this.state.AutoAccident)}> </Button>
      </TouchableOpacity>

      <TouchableOpacity >
        <Button title = {this.state.Assault} onPress = {this.goToSocialSection} > </Button>
      </TouchableOpacity>

      <TouchableOpacity >
         <Button title = {this.state.Robbery} onPress = {this.goToSocialSection} > </Button>
      </TouchableOpacity>

      <TouchableOpacity >
         <Button title = {this.state.NaturalDisasters} onPress = {this.goToSocialSection} > </Button>
      </TouchableOpacity>

      <SendDataToFirebase selectedCaseType ="Casetype" />

      <Text>
        {this.state.clickedElement}
        </Text>
      
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