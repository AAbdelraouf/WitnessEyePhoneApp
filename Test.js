// import react, { Comment } from 'react';
// import { Platform, View, Text, TouchableOpacity } from 'react-native';

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import { Actions } from 'react-native-router-flux';

onPressStart = () => {
    alert('ss')
}

const Test = () => {
    
    return (
        <View >
        <TouchableOpacity onPress={onPressStart}>
        <Text>
        Texts from test component
        </Text>
        </TouchableOpacity>
        </View>
    )
}

export default Test;