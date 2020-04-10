import React, {Component, useState} from 'react';
import { StyleSheet, ImageBackground, Text, View, Button, Alert, TouchableHighlight, NavigationContainer } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Background from './assets/background.jpeg';
import MainContainer from './components/main_container/main_container';
//import inventory from './inventory/inventory';
//import menu from './menu/menu';


export default class App extends Component {
  
  render() {
    
    //const Stack = createStackNavigator

     const onPress = () => {
          alert('Button Pressed');
     };

    return (
    <View style= {{flex: 1}}>
        <ImageBackground source = {Background} style={styles.image}>
            <TouchableHighlight style={styles.logoutButton} onPress={onPress}>
                <Text style={styles.logoutText}>
                    LOGOUT
                </Text>
            </TouchableHighlight>

            <View style={styles.mainMenu}>
                    <TouchableHighlight style={styles.menuButton} onPress={onPress}>
                         <Text style = {styles.menuText}>
                             Inventory
                         </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.menuButton} onPress={onPress}>
                         <Text style = {styles.menuText}>
                             Menu
                         </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.menuButton} onPress={onPress}>
                         <Text style = {styles.menuText}>
                             Metrics
                         </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.menuButton} onPress={onPress}>
                         <Text style = {styles.menuText}>
                             Approve Times
                         </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.menuButton} onPress={onPress}>
                         <Text style = {styles.menuText}>
                             Manage Tips
                         </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.menuButton} onPress={onPress}>
                         <Text style = {styles.menuText}>
                             Manage Employees
                         </Text>
                    </TouchableHighlight>
            </View>
       </ImageBackground>
    </View>
    )
  }
}



const styles = StyleSheet.create({

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },

    logoutButton: {
        justifyContent: 'flex-start',
        height: 160,
        width: 160,
        margin: 20,
        backgroundColor: '#990000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    mainMenu: {
        margin: 250,
        paddingTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexShrink: 2.0,
    },

    menuButton: {
        width: 200,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30,
        padding: 5,
        backgroundColor: '#3333ff'
    },

    menuText: {
        fontSize: 20,

    },

    logoutText: {
            color: '#ffffff',
            fontSize: 20,
        },
})

// Navigation
//const rootNavigator = createSwitchNavigator({
  //Homescreen: MainContainer,
  //Inventory: Inventory,
  //Menu: PayScreen,
  //Metrics: Metrics,
  //ApTimes: ApTimes,
  //ManTips: ManTips,
  //ManEmps: ManEmps
//},
//{ initialRouteName: 'Homescreen' },
//{ headerMode: 'none' })

//const AppContainer = createAppContainer(rootNavigator);
