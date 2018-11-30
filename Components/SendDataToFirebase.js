import React, { Component } from 'react';
import {View, Text, Button } from 'react-native';

import WriteWitnessSession from './WriteWitnessSession.js';
import Firebase from './Firebase.js';

import SocialSection from './SocialSection.js';


class SendDataToFirebase extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
          }
          this.sendDataOut = this.sendDataOut.bind(this)   
    }

    // `Users/${this.state.one}`

     sendDataOut = () => {
        Firebase.database().ref("Users/edbraouf/title").update({
            
            ...this.state
        })
    };
        

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.data !== prevProps.data) {
            this.setState({ ...this.props })
        }
        // alert(this.state.one)

        if(this.props.selectedCaseType !== prevProps.selectedCaseType) {
            this.setState({ ...this.props })
        }
        // alert(this.state.two)

        if(this.props.finalTestimonyTyped !== prevProps.finalTestimonyTyped) {
            this.setState({ ...this.props })
            
        }
        {this.sendDataOut()}
        // alert(this.state.three)
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