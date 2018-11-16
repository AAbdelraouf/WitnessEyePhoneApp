import React, { Component } from 'react';
import {View, Text, Button } from 'react-native';

import WriteWitnessSession from './WriteWitnessSession.js';
import Firebase from './Firebase.js';

class SendDataToFirebase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ChooseCaseType  : this.props.caseType,
            dataFromSession : this.props.finalTestimonyTyped,
          }
          this.sendDataOut = this.sendDataOut.bind(this)
    }

    sendDataOut = (dataParam) => {
    // Send Data to firebase 
    Firebase.database().ref('Users/John').push({  
        finalTestimony :  dataParam,
        // caseTypeTest   :  caseTypeData
    }).catch((error)=>{
      //error callback
      console.log('error ' , error)
    })
    }
    
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.finalTestimonyTyped !== prevProps.finalTestimonyTyped) {
        // alert(this.props.finalTestimonyTyped)
        // this.setState({arrayOfData : [...this.state.arrayOfData, this.props.finalTestimonyTyped]  })
        // this.setState({arrayPosts  : [...this.state.arrayPosts, currentValueFromState] });
        // alert("arrayOfData is: " + this.state.dataFromSession)
        this.sendDataOut(this.props.finalTestimonyTyped)
        }
      }

    //   componentDidUpdate(prevProps) {
    //     alert(this.state.dataFromSession)
        // only update chart if the data has changed
        // if (prevProps.finalTestimonyTyped !== this.props.finalTestimonyTyped) {
            // this.setState({ arrayOfData : [...this.state.arrayOfData, this.props.finalTestimonyTyped] })
            // alert(this.state.arrayOfData)
            // this.sendDataOut()
        //   alert("Previous data " + prevProps.finalTestimonyTyped  + " New propps " + this.props.finalTestimonyTyped)
        // }
    //   }

    render() { 
        
        return ( 
            <View>
                
        {/* { this.state.dataFromSession.map((item, keyz)=>( <Text key={keyz}> { item } </Text> )) } */}
        {/* <Text>
        { this.state.ChooseCaseType }
        </Text> */}

                </View>
         );
    }
}
 
export default SendDataToFirebase;
