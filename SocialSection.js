import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';


class SocialSection extends Component {

   goToSettingsSection = () => {
      Actions.WitnessType()
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