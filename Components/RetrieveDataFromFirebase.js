import React, { Component } from 'react';
import { Text, Button, View, ListView } from 'react-native'

import Firebase from './Firebase.js';

class RetrieveDataFromFirebase extends React.Component {
    constructor(props){
        this.state = {  }
    }

    componentDidMount(){
        // var recentPostsRef = Firebase.database().ref('/Users/ahmedbas/title');
        // recentPostsRef.once('value').then(snapshot => {
        //   this.setState({ stores: snapshot.val() })
        //   alert(snapshot.val())
        // })

            var starCountRef = Firebase.database().ref('/Users/ahmedbas/title');
            starCountRef.on('value', function(snapshot) {
            // updateStarCount(postElement, snapshot.val());
            
            alert(snapshot.val())
});
this.setState({
    valueReceived : snapshot.val()
})
alert(this.state.valueReceived)
}


// FirebaseApp.database().ref('/users/' + userId).on('value', (snapshot) => {
//     const userObj = snapshot.val();
//     this.name = userObj.name;
//     this.avatar = userObj.avatar;
//   });


//   handleChange(e) {
//     this.setState({
//       name: e.nativeEvent.text
//     });
//   }
  


//   componentDidMount() {
//     itemsRef.on('value', (snapshot) => {
//         let data = snapshot.val();
//         let items = Object.values(data);
//         this.setState({items});
//      });
// }





    render() { 
        return ( 
            <View>
                <Text>
                {this.stat}
                    </Text>
                </View>
         );
    }
}
 
export default RetrieveDataFromFirebase;