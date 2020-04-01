import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import Loading from './components/loading/loading';
import MainContainer from './components/main_container/main_container';
import Registration from './components/register/registration';
import Login from './components/register/login/login';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/functions';
import '@react-native-firebase/auth';

firebase.functions().useFunctionsEmulator('http://localhost:5000');

// Navigation
const RootNavigator = createStackNavigator({
  Load: Loading,
  Menu: MainContainer,
  Register: Registration,
  Login: Login,
  //Pay: PayScreen
},
{ 
  initialRouteName: 'Load',
  headerMode: 'none',
  defaultNavigationOptions: {
    cardStyle: {
      backgroundColor: '#f7cac9'
    },
    ...TransitionPresets.ScaleFromCenterAndroid
  }
});

const AppContainer = createAppContainer(RootNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    )
  }
}