import {createStackNavigator,} from 'react-navigation-stack'
import React, {Component} from 'react'
import {AppRegistry} from 'react-native'
import {createAppContainer} from 'react-navigation'
import OrderContainer from './OrderContainer.js'
import OrderDetails from './OrderDetails.js'
import HomeScreen from './HomeScreen.js'
import styles from '../Styles/Stylesheet.js' 

const AppNavigator = createStackNavigator(
  {
 
  Home : HomeScreen,
  Orders : OrderContainer,
  Order_Details: OrderDetails,
  },
  
  {
    initialRouteName: "Home"
  }

  
)
const AppContainer = createAppContainer(AppNavigator)
export default AppContainer
