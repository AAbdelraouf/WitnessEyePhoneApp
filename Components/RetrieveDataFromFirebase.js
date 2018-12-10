import React, {Component} from 'react';
import {Text, Button, View, ListView} from 'react-native'

import Firebase from './Firebase.js';

class RetrieveDataFromFirebase extends React.Component {
    constructor(props) {
        this.state = {valueReceived:""}
    }

    componentDidMount() {
        var databaseRef = Firebase.database().ref('/Users/ahmedbas/title');
        databaseRef.on('value', function (snapshot) {
            console.log(snapshot.val())
        });
        this.setState({ valueReceived: snapshot.val() })
        console.log(this.state.valueReceived)
    }

    render() {
        return (
            <View>
                <Text>
                    {this.state.valueReceived}
                </Text>
            </View>
        );
    }
}

export default RetrieveDataFromFirebase;