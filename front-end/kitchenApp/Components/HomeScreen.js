import React from 'react';
import { StyleSheet, Text, View, ImageBackground ,TouchableOpacity} from 'react-native'
import styles from '../Styles/Stylesheet.js'
import AppNavigator from './AppNavigator.js'


export default class HomeScreen extends React.Component{
    static navigationOptions = {
    title: 'Home',
    headerStyle: {
    backgroundColor: 'navy',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 30
    },
  }

    render (){
        return(
            <ImageBackground
            source = { require('../Images/app.jpg')}
            style = {styles.background}
            >
            <TouchableOpacity
            onPress = {() => this.props.navigation.navigate('Orders')}>
            <Text style = {styles.diveIn}> Dive in!</Text>
            
            </TouchableOpacity>
            </ImageBackground>
            
        )
    }

}
