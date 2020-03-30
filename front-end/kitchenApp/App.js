import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native'
import Header from './components/Header'
import OrderContainer from './components/orderContainer'
import IngredientsButton from './components/ingredients'
import KitchenappBackground from './images/app.jpg'
import styles from './StyleSheet/styles.js'

export default class App extends Component {
  render(){
  return(
    <ImageBackground source = {KitchenappBackground} style = {{height: '100%', width:'100%'}}>
    
    <View style = {styles.container2}>
    <Header />
      <ScrollView>
    <OrderContainer />
    <OrderContainer/>
    <OrderContainer/>
      <IngredientsButton text = 'Ingredients' color = '#33ABF9' ></IngredientsButton>
    </ScrollView>
    </View>
    </ImageBackground>

  )}}






