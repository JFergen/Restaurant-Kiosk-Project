import React, { Component } from 'react';
import { StyleSheet, View,Text} from 'react-native';
import styles from '../StyleSheet/styles.js'
export default class Header extends Component{
    render(){
    return (
        <View  style = {styles.header2}>
        <Text style = {styles.textHeader}> Orders</Text>
        </View>
    )
}
}


