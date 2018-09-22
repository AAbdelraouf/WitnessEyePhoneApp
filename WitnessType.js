import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';



const SessionType = () => {
   const goToSocialSection = () => {
      Actions.SocialSection()
   }
   return (
      <TouchableOpacity onPress = {goToSocialSection}>
         <Text>Auto incident</Text>
         <Text>Assault</Text>
         <Text>Robbery</Text>
         <Text>Natural disasters </Text>
      </TouchableOpacity>
   )
}
export default SessionType;