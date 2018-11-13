import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Firebase from './Firebase.js';
import SendDataToFirebase from './SendDataToFirebase.js';

class WriteWitnessSession extends Component {
  constructor(props){
    super(props);
    this.state={
      currentlyWritten:'',
      arrayPosts:[1],

    }
    
    this.goBackToSocialSection = this.goBackToSocialSection.bind(this)
    this.onCancelButton = this.onCancelButton.bind(this)
    this.onPostButton = this.onPostButton.bind(this)
  }

goBackToSocialSection = () => { Actions.SocialSection() }

onCancelButton = () => {
    Alert.alert(
        'Are you sure', '',
        [
          {text: 'Yes', onPress: () => this.goBackToSocialSection()},
          {text: 'No',  style: 'cancel'},
        ],
        { cancelable: false }
      )
}

onPostButton = () => {
currentValueFromState = this.state.currentlyWritten
// Checking if value is empty
currentValueFromState === '' ? alert('Empty') :
// If not, 
// Grab data from firebase to the state
this.setState({arrayPosts: [...this.state.arrayPosts, currentValueFromState] });
this.setState({currentlyWritten: ''})

}

  render() {
    return (
      <View>

      <View>
        <Text>
        Write your testimony below
        </Text>
        </View>

      <View style={styles.textAreaContainer} >
        <TextInput
        style={styles.textArea}
        underlineColorAndroid="transparent"
        placeholder="Type something"
        placeholderTextColor="grey"
        numberOfLines={10}
        multiline={true}
        value = {this.state.currentlyWritten}
        onChangeText={(inputValue) => this.setState({currentlyWritten: inputValue})}
        />
      </View>

      <View>
      <TouchableOpacity onPress = { this.onPostButton } >
      <Text>
      Post
      </Text>
      </TouchableOpacity>
      </View>
      

      <View>
      <TouchableOpacity onPress = { this.onCancelButton } >
      <Text>
      Cancel
      </Text>
      </TouchableOpacity>

      <SendDataToFirebase writtenSession = {this.state.arrayPosts} />
      
      </View>


      </View>
    );
  }
}

export default WriteWitnessSession;

const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start"
  }
})