import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

class WriteWitnessSession extends Component {

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