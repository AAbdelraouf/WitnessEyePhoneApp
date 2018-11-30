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
      finalizedTestimony:"",
    }
    
    this.goBackToSocialSection = this.goBackToSocialSection.bind(this)
    this.onCancelButton = this.onCancelButton.bind(this)
    this.onPostButton = this.onPostButton.bind(this)
  }

goBackToSocialSection = () => { Actions.SocialSection() }

onPostButton = () => {

  // Checking if value is empty
  this.state.currentlyWritten === '' ? alert('Empty') :
  // this.setState({finalizedTestimony: [...this.state.finalizedTestimony, this.state.currentlyWritten] });
  this.setState({finalizedTestimony :  this.state.currentlyWritten });
  this.setState({currentlyWritten: ''})
  this.goBackToSocialSection()
}

onCancelButton = () => {
    Alert.alert(
        'Are you sure', '',
        [
          {text: 'Yes', onPress: () => this.goBackToSocialSection()},
          {text: 'No',  style: 'cancel'},
        ],
        { cancelable: true }
      )
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
        numberOfLines={100}
        multiline={true}
        value = {this.state.currentlyWritten}
        placeholder = {"Type your testimony herex"}
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
      
      
      <SendDataToFirebase finalTestimonyTyped = {this.state.finalizedTestimony} />
      
      
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