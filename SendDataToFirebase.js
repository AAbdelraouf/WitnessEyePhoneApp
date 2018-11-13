import React, { Component } from 'react';
import {View, Text, Button } from 'react-native';

import WriteWitnessSession from './WriteWitnessSession.js';

import Firebase from './Firebase.js';

class SendDataToFirebase extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         dataFromSession : this.props.writtenSession
    //       }
    // }

    // componentWillReceiveProps(){
    //     alert('Props received')
    // }

    render() { 
        // var DataFromWriteWitnessSession = this.props.sendTestimonyToFirebase
        // // Send Data to firebase 
        // Firebase.database().ref('Users/').push({  
        //     finalTestimony: DataFromWriteWitnessSession
        // }).then((data) => {
        //   //success callback
        //   console.log('data ' , data)
        //   alert("Sent to firebase!")
        // }).catch((error)=>{
        //   //error callback
        //   console.log('error ' , error)
        // })
        
        return ( 
            <View>
                
                { this.props.writtenSession.map((item, keyz)=>( <Text key={keyz}> { item } </Text> )) 
            }
                
                </View>
         );
    }
}
 
export default SendDataToFirebase;