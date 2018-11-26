import React, { Component } from 'react';
import {View, Text, Button } from 'react-native';

import WriteWitnessSession from './WriteWitnessSession.js';
import Firebase from './Firebase.js';

import SocialSection from './SocialSection.js';


class SendDataToFirebase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFromCreateTestimony      : this.props.data,
            ChooseCaseType               : this.props.selectedCaseType,
            dataFromSession              : this.props.finalTestimonyTyped
            
          }
        //   this.sendDataOut = this.sendDataOut.bind(this)
    }
    


    // sendDataOut = (dataParam) => {
    // // Send Data to firebase 
    // Firebase.database().ref('Users/User').push({  
    //     finalTestimony :  dataParam,
    //     // caseTypeTest   :  caseTypeData
    // }).catch((error)=>{
    //   //error callback
    //   console.log('error ' , error)
    // })
    // }
    
    componentDidUpdate(oldProps) {
        // Typical usage (don't forget to compare props):
        newProps = this.props
        if (newProps.data !== oldProps.data) {
        alert(newProps.data)
        }

        if (newProps.selectedCaseType !== oldProps.selectedCaseType) {
            alert(newProps.selectedCaseType)
        }

        if (newProps.finalTestimonyTyped !== oldProps.finalTestimonyTyped) {
            alert(newProps.finalTestimonyTyped)
        }

        // this.sendDataOut(this.props.data)
      }

    render() { 
        
        return ( 
            <View>
                
        {/* { this.state.dataFromSession.map((item, keyz)=>( <Text key={keyz}> { item } </Text> )) } */}
        
        {/* <Text>
            {this.state.ChooseCaseType}
        </Text> */}



        <Text>
        {this.state.dataFromCreateTestimony}
            </Text>

                </View>
         );
    }
}
 
export default SendDataToFirebase;