import React, { Component } from 'react';
import {View, Text, Button } from 'react-native';

import WriteWitnessSession from './WriteWitnessSession.js';
import Firebase from './Firebase.js';

class SendDataToFirebase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFromSession : this.props.finalTestimonyTyped,
            arrayOfData : []
          }

          this.sendDataOut = this.sendDataOut.bind(this)
    }
    

    // componentDidUpdate(prevProps) {
    //     if(prevProps.myProps !== this.props.myProp) {
    //         this.setState({ dataFromSession :"" })
    //       // this.props.myProp has a different value
    //       // ...
    //     }
    //   }


    sendDataOut = () => {
    // // Send Data to firebase 
    Firebase.database().ref('Users/').set({  
        finalTestimony: this.state.dataFromSession
    }).then((data) => {
      //success callback
      console.log('data ' , data)
      alert("Sent to firebase!")
    }).catch((error)=>{
      //error callback
      console.log('error ' , error)
    })
    }
    
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.finalTestimonyTyped !== prevProps.finalTestimonyTyped) {
        // alert(this.props.finalTestimonyTyped)
        this.setState({arrayOfData : [...this.state.arrayOfData, this.props.finalTestimonyTyped]  })
        // this.setState({arrayPosts  : [...this.state.arrayPosts, currentValueFromState] });
        alert("arrayOfData is: " + this.state.arrayOfData)
        // this.sendDataOut()
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
                
        { this.state.dataFromSession.map((item, keyz)=>( <Text key={keyz}> { item } </Text> )) }

                </View>
         );
    }
}
 
export default SendDataToFirebase;
