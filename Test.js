// import react, { Comment } from 'react';
// import { Platform, View, Text, TouchableOpacity } from 'react-native';

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import { Actions } from 'react-native-router-flux';



class Test extends Component {
    onPressStart = () => {
        alert('ss')
    }
    render(){
        return (
            <Text> Hello {this.props.test} </Text>
        )
    }
}

export default Test;