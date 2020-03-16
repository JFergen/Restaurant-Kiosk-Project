import React, {Component, useState, useEffect} from 'react';
import { ImageBackground } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Background from './assets/background.jpeg';
import MainContainer from './components/main_container/main_container';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/functions';
import '@react-native-firebase/auth';
 
firebase.functions().useFunctionsEmulator('http://localhost:5000');

export default class App extends Component {
  render() {
    return (
      <ImageBackground
        source = {Background}
        style = {{ height: '100%', width: '100%' }}
      >
        <AppContainer/>
      </ImageBackground>
    )
  }
}

// Navigation
const rootNavigator = createSwitchNavigator({
  Menu: MainContainer,
  //Login: Login,
  //Pay: PayScreen
},
{ initialRouteName: 'Menu' },
{ headerMode: 'none' })

const AppContainer = createAppContainer(rootNavigator);