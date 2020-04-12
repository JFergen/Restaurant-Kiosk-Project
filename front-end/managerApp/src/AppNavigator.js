import {createStackNavigator,} from 'react-navigation-stack'
import React, {Component} from 'react'
import {AppRegistry} from 'react-native'
import {createAppContainer} from 'react-navigation'
import Login from '../Login'
import LoginForm from '../LoginForm'
import EmployeeManagement from '../EmployeeManagement.js'
import HomeScreen from './HomeScreen.js'


const AppNavigator = createStackNavigator(
  {
 
  Home : HomeScreen,
  Login_Screen : Login,
  Employee: EmployeeManagement,
  },
  
  {
    initialRouteName: "HomeScreen"
  }

  
)
const AppContainer = createAppContainer(AppNavigator)
export default AppContainer
