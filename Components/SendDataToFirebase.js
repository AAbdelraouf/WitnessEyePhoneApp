import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import WriteWitnessSession from './WriteWitnessSession.js';
import Firebase from './Firebase.js';

import SocialSection from './SocialSection.js';

class SendDataToFirebase extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.sendDataOut = this.sendDataOut.bind(this)
    }

    sendDataOut = () => {
        Firebase.database().ref("Users/ahmedbas/title").update({ ...this.props })
    };

    componentDidUpdate(prevProps) {
        {
            this.sendDataOut()
        }
    }

    render() {
        return (
            <View>
                
            </View>

        );
    }
}

export default SendDataToFirebase;