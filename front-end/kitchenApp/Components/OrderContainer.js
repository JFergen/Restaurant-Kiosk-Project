/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View,Button,ImageBackground,ScrollView,TouchableOpacity} from 'react-native'
import firebase from '@react-native-firebase/app'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation-stack'
import {
Table, 
Row, 
Rows} from 'react-native-table-component'
import styles from '../Styles/Stylesheet.js'
import OrderDetails from './OrderDetails.js'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
});

const firebaseCredentials = Platform.select({
  ios: 'https://invertase.link/firebase-ios',
  android: 'https://invertase.link/firebase-android',
});
export default class OrderContainer extends React.Component{
  static navigationOptions = {
    title: 'Orders',
    headerStyle: {
    backgroundColor: 'navy',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 30
    },
  }
  
    state = {
      toggle:false
    }
    state = {
      toggle2:false
    }

  onPressButton = () => {
    const newState = !this.state.toggle
    this.setState({toggle:newState})
  }
  onButtonPress = () => {
    const newState2 = !this.state.toggle2
    this.setState({toggle2:newState2})
  }
 
    render(){
      const {toggle} = this.state
      const {toggle2} = this.state
      const newText = toggle? "Server is called":"Call server"
      const NewColor = toggle? "white": "white"
      const newText2 = toggle2? "Order has been marked as ready":"Mark order ready"
      const NewColor2 = toggle2? "white": "white"
      
    return (
       <ImageBackground
            source = { require('../Images/app.jpg')}
            style = {styles.background}
            >
        <ScrollView>
        <View style = {styles.container}>
        <Table borderStyle = {{borderWidth:1}} >
        </Table>
          <Table borderStyle = {{borderWidth:1}}>
         <Text style = {styles.textOrders}> Table1:
         </Text>
          <Button  title = {newText} color = {NewColor} onPress = {this.onPressButton}>
          </Button>
           <Button
            title="Order details" color ={'white'}  onPress = {() => this.props.navigation.navigate('Order_Details')}> 
            </Button>

           <Button  title = {newText2} color = {NewColor2} onPress = {this.onButtonPress}>
          </Button>
  
         </Table>
        </View>
         <TouchableOpacity
            onPress = {() => this.props.navigation.navigate('Home')}>
            <Text style = {styles.diveIn}> Go to home</Text>
            
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>

    )
    }
    }
    
