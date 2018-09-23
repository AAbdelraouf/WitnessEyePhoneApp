import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const SessionType = () => {
   const goToSocialSection = () => {
      Actions.WriteWitnessSession()
   }
   return (
       <View>
      
      <TouchableOpacity onPress = {goToSocialSection}>
         <Text>Auto incident</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {goToSocialSection}>
        <Text>Assault</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {goToSocialSection}>
         <Text>Robbery</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {goToSocialSection}>
         <Text>Natural disasters </Text>
      </TouchableOpacity>
      
      </View>
   )
}
export default SessionType;