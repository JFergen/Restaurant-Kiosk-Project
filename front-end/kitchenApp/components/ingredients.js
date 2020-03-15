import React, { Component } from 'react'
import { 
StyleSheet,
Button,
View,
Text,
ScrollView,
Alert,
TouchableOpacity
} from 'react-native'
import styles from '../StyleSheet/styles.js'

const IngredientsButton = props => {
    const content = (
        <View style = {[styles.button,{backgroundColor: props.color}]}>
        <Text style = {styles.text} > {props.text} </Text> 
        </View>
    )
    return <TouchableOpacity onPress = {props.onPress}>{content}</TouchableOpacity>
}
export default IngredientsButton



