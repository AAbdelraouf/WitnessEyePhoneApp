import React, { Component } from 'react';
import {View, Text, Button } from 'react-native';

import WriteWitnessSession from './WriteWitnessSession.js';
import Firebase from './Firebase.js';

class SendDataToFirebase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFromSession : '',
    
          }
    
    }
    

    // componentDidUpdate(prevProps) {
    //     if(prevProps.myProps !== this.props.myProp) {
    //         this.setState({ dataFromSession :"" })
    //       // this.props.myProp has a different value
    //       // ...
    //     }
    //   }


    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.finalTestimonyTyped !== prevProps.finalTestimonyTyped) {
        //   this.fetchData(this.props.finalTestimonyTyped);
        alert(this.props.finalTestimonyTyped)
        }
      }
    

    // componentWillReceiveProps(nextrops) {
    //     alert('componentWillReceiveProps', nextrops);
    //     this.setState({ dataFromSession : nextrops })
        
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
                
    { this.props.finalTestimonyTyped.map((item, keyz)=>( <Text key={keyz}> { item } </Text> )) }

                </View>
         );
    }
}
 
export default SendDataToFirebase;
