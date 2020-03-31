import React, { Component } from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import MainContainer from '../main_container/main_container';
import Login from '../login/login';
import styles from './styles';

// Navigation
const RootNavigator = createStackNavigator({
    Menu: MainContainer,
    Login: Login,
    //Pay: PayScreen
  },
  { 
    initialRouteName: 'Menu',
    headerMode: 'none',
    defaultNavigationOptions: {
      cardStyle: {
        backgroundColor: '#f7cac9'
      },
      ...TransitionPresets.ScaleFromCenterAndroid
    }
  });
  
const AppContainer = createAppContainer(RootNavigator);

class Loading extends Component {
    render() {
        return (
            <AppContainer/>
        );
    }
}

export default Loading;