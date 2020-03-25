import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native'
import Header from './components/Header'
import OrderContainer from './components/orderContainer'
import ServerHelpButton from './components/serverHelpButton'
import KitchenappBackground from './images/app.jpg'

export default class App extends Component {
  render(){
    return(
      <ImageBackground source = {KitchenappBackground} style = {{height: '100%', width:'100%'}}>
        <ScrollView>
          <View style = {styles.container}>
            <Header/>
            <OrderContainer/>
            <ServerHelpButton text = 'Back' color = '#33ABF9' ></ServerHelpButton>
          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
})


