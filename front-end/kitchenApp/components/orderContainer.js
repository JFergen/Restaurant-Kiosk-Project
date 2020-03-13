import React, { Component } from 'react'
import { StyleSheet,Button,
 View,Text,
 ScrollView,
 Alert, } from 'react-native'
import {Table, Row, Rows} from 'react-native-table-component'
import {createAppContainer}from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import OrderDetails from '../orderDetails/orderDetails'


export default class OrderContainer extends Component{

    constructor (props){
    super(props)
    this.state = {
      buttonColor :'black',
      buttonText: 'call server',
      bText: 'order is ready',
      bcolor: 'black'
      
    }
  }
  onPressButton = () => {
    this.setState({buttonText: 'server is called',
    buttonColor:'green'})
  }
  onButtonPress = () =>
  {
    this.setState({bText: " the order is marked as ready",
    bcolor: 'red'})
  }

    render(){
    return (
      
        <View style = {styles.container}>
        <Text style = {styles.text}> Orders </Text>
        <Table borderStyle = {{borderWidth:10}} >
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


         <Table borderStyle = {{borderWidth:10}} >
        </Table>
          <Table borderStyle = {{borderWidth:1}}>
         <Text style = {styles.textOrders}> Table2:
         </Text>
          <Button title = {this.state.buttonText} color = {this.state.buttonColor} onPress = {this.onPressButton}>
          </Button> 

          <Button 
          title = 'order details ' color = 'black'></Button> 

           <Button title = {this.state.bText} color = {this.state.bcolor} onPress = {this.onButtonPress}>
          </Button> 
         </Table>



         <Table borderStyle = {{borderWidth:10}} >
        </Table>
          <Table borderStyle = {{borderWidth:1}}>
         <Text style = {styles.textOrders}> Table3:
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

     const styles = StyleSheet.create({
         
           container: {
            flex: 2,
            justifyContent: 'space-between',
            marginTop: 40,
            marginLeft: 40,
            marginRight: 40,
            borderWidth: 10,
            borderColor: "black"
    },
        text: {
        color: 'black',
        fontSize: 40,
        textAlign: 'center'
    },
        textOrders:
    {   
        color: 'black',
        fontSize: 30,
        borderRadius: 20,
        textAlign : 'left'
    }
    })

    
