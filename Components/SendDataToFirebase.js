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
            dataFromSession              : this.props.finalTestimonyTyped,

            account_info :"edbraouf"
          }
          this.sendDataOut = this.sendDataOut.bind(this)
        
    }
    

     sendDataOut = (userInfo, testimonyType, testimonyText) => {

        if (this.state.dataFromCreateTestimony &&
            this.state.ChooseCaseType &&
            this.state.dataFromSession === "" )
            
            { alert("Not yet"); }
    
        else{
            alert("3 fields filled");
            
            // Send Data to firebase 
            Firebase.database().ref(`Users/${this.state.account_info}`).push({  
                "Testimony Text" : testimonyText,
                "Testimony Type" : testimonyType,
                "User Info"      : userInfo
                
                }).catch( (error) => {
                //error callback
                console.log('error ' , error)
            })
        }
        
        }

    componentDidUpdate(oldProps) {
    // Typical usage (don't forget to compare props):
        newProps = this.props
        
        if (newProps.data !== oldProps.data) {
        alert(newProps.data)
        this.setState({ dataFromCreateTestimony : newProps.data})
        }
        if (newProps.selectedCaseType !== oldProps.selectedCaseType) {
            alert(newProps.selectedCaseType)
            this.setState({ ChooseCaseType : newProps.selectedCaseType})
        }

        if (newProps.finalTestimonyTyped !== oldProps.finalTestimonyTyped) {
            alert(newProps.finalTestimonyTyped)
            this.setState({ dataFromSession : newProps.finalTestimonyTyped})
            
             dataFromCreateTestimony = this.state.dataFromCreateTestimony
             ChooseCaseType          = this.state.ChooseCaseType
             dataFromSession         = this.state.dataFromSession


            //  this.props.data,
            //  this.props.selectedCaseType,
            //  this.props.finalTestimonyTyped,

           this.sendDataOut("dataFromCreateTestimony", "ChooseCaseType", "dataFromSession")
        }

        

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
        
        <Text>
        {this.state.ChooseCaseType}
        </Text>

        <Text>
        {this.state.dataFromSession}
        </Text>


                </View>
         );
    }
}
 
export default SendDataToFirebase;