import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, InputText } from 'react-native';

import { Actions } from 'react-native-router-flux';

class SettingsSection extends Component {
constructor(props){
  super(props);

  this.state = {}
  this.onCkickNavigate =  this.onCkickNavigate.bind(this);
}

onCkickNavigate = () => { alert("ss") }

    render() {
      return (
        <View style={styles.container}>
        
          <Text
            onPress = {this.onCkickNavigate}
          > Settings Section </Text>
        </View>
      );
    }
}
export default SettingsSection;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });