/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View,Button,ImageBackground,TouchableOpacity} from 'react-native'
import firebase from '@react-native-firebase/app'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import OrderContainer from './OrderContainer.js'
import styles from '../Styles/Stylesheet.js'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
});

const firebaseCredentials = Platform.select({
  ios: 'https://invertase.link/firebase-ios',
  android: 'https://invertase.link/firebase-android',
});

export default class OrderDetails extends React.Component {  
  static navigationOptions = {
    title: 'Order Details',
    headerStyle: {
    backgroundColor: 'navy',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 30
    },
  }
    render() {  
        return (  
           <ImageBackground
            source = { require('../Images/app.jpg')}
            style = {styles.background}
            >
            <TouchableOpacity
            onPress = {() => this.props.navigation.navigate('Orders')}>
            <Text style = {styles.diveIn}> Go to Orders</Text>
            
            </TouchableOpacity>

            </ImageBackground>
            
          
    )
    }  
}
