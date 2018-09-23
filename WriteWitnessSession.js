import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

class WriteWitnessSession extends Component {
  constructor(props){
    super(props);
    this.state={
      currentlyWritten:'',
      arrayPosts:[],
    }
  }

  goBackToSocialSection = () => { Actions.SocialSection() }

  onCancelButton = () => {
    Alert.alert(
        'Are you sure',
        '',
        [
          {text: 'Yes', onPress: () => this.goBackToSocialSection()},
          {text: 'No',  style: 'cancel'},
        ],
        { cancelable: false }
      )
}

onPostButton = () => {
  alert('ss')
}

  render() {
    return (
      <View>
        <Text>
        Write your testimony below
        </Text>

      <View style={styles.textAreaContainer} >
        <TextInput
        style={styles.textArea}
        underlineColorAndroid="transparent"
        placeholder="Type something"
        placeholderTextColor="grey"
        numberOfLines={10}
        multiline={true}
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