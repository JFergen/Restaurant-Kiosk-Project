
import React, { Component } from 'react';
import { StyleSheet, View,Text} from 'react-native';

export default class Header extends Component{
    render(){
    return (
        <View  style = {styles.header}>
        <Text style = {styles.text}> Kitchen App</Text>
        </View>
    )
}
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: '#33ABF9',
        padding: 15,
    },
    text: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
    }
}
)
