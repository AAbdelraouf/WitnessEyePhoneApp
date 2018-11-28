import React, { Component } from 'react';
import {View, Text, Button } from 'react-native';

import WriteWitnessSession from './WriteWitnessSession.js';
import Firebase from './Firebase.js';

import SocialSection from './SocialSection.js';


class SendDataToFirebase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            one:"",
            two:"",
            three:""
          }
          this.sendDataOut = this.sendDataOut.bind(this)   
    }

     sendDataOut = () => {
        Firebase.database().ref(`Users/${this.state.one}`).set({
            "One":   this.state.one,
            "Two":   this.state.two,
            "Three": this.state.three
        })};
        
    componentDidUpdate(oldProps) {
    // Typical usage (don't forget to compare props):
        newProps = this.props
        
        if (newProps.data !== oldProps.data) {
            // alert(newProps.data)    
            this.setState({ one: newProps.data })
            alert("Added to state : " + newProps.data)
            
    }
        if (newProps.selectedCaseType !== oldProps.selectedCaseType) {
            // alert(newProps.selectedCaseType)
            this.setState({ two: newProps.selectedCaseType })
            alert("Added to state : " + newProps.selectedCaseType)
    }

        if (newProps.finalTestimonyTyped !== oldProps.finalTestimonyTyped) {
            // alert(newProps.finalTestimonyTyped)
            this.setState({ three: newProps.finalTestimonyTyped })
            alert("Added to state : " + newProps.finalTestimonyTyped)       
        
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
        {this.state.one}
        </Text>
        
        <Text>
        {this.state.two}
        </Text>

        <Text>
        {this.state.three}
        </Text>

    </View>

         );
    }
}
 
export default SendDataToFirebase;