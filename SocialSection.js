import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';


const SocialSection = () => {

   const goToSettingsSection = () => {
      Actions.WitnessType()
   }

   return (
      <TouchableOpacity onPress = {goToSettingsSection}>
         <Text>+ Start witness session</Text>
      </TouchableOpacity>
   )
}
export default SocialSection;