import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SignUpPage from './Users/SignUpPage.js'
// import App from './App.js'

class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <View>

        <Button
          onPress={() => this.props.navigation.navigate('SignUpPage')}
          title="Go to SignUpPage"
        />

      </View>
    );
  }
}

const ScreensNavigator = StackNavigator({
  App: { screen: App },
  SignUpPage: { screen: SignUpPage }
});
export default ScreensNavigator;