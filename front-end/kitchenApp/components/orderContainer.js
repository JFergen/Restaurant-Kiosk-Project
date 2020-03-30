import React, { Component } from 'react'
import { 
StyleSheet,
Button,
View,Text,
ScrollView,
Alert, } from 'react-native'
import {
Table, 
Row, 
Rows} from 'react-native-table-component'
import {createAppContainer}from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import styles from '../StyleSheet/styles.js'


export default class OrderContainer extends Component{
    constructor (props){
    super(props)
    this.state = {
      buttonColor: 'black',
      buttonText: 'call server',
      bText: 'order is ready',
      bcolor: 'black'
    }
  }

  onPressButton = () => {
    this.setState({buttonText: 'server is called',
    buttonColor:'red'})
  }
  
  onButtonPress = () =>
  {
    this.setState({bText: " the order is marked as ready",
    bcolor: 'green'})
  }
    render(){
    return (
      
        <View style = {styles.container}>
        <Table borderStyle = {{borderWidth:1}} >
        </Table>
          <Table borderStyle = {{borderWidth:1}}>
         <Text style = {styles.textOrders}> Table1:
         </Text>
          <Button title = {this.state.buttonText} color = {this.state.buttonColor} onPress = {this.onPressButton}>
          </Button> 
          <Button 
          title = 'order details ' color = 'black'></Button> 
           <Button title = {this.state.bText} color = {this.state.bcolor} onPress = {this.onButtonPress}>
          </Button> 
         </Table>
        </View>

    )
    }
    }
    

     
    
