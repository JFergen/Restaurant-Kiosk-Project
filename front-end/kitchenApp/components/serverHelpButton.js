import React, { Component } from 'react'
import { StyleSheet,Button, View,Text,ScrollView,Alert,TouchableOpacity} from 'react-native'
const ServerHelpButton = props => {
    const content = (
        <View style = {[styles.button,{backgroundColor: props.color}]}>
        <Text style = {styles.text} > {props.text} </Text> 
        </View>
    )
    return <TouchableOpacity onPress = {props.onPress}>{content}</TouchableOpacity>
}

  const styles = StyleSheet.create({
         button: {
             
             padding: 16,
             width: 100,
             borderRadius:20,
             position :'absolute',
             bottom: -125,
             left: 275
         },
         text: {
             color: 'white',
             fontSize: 20,
             textAlign: 'center'
            
         }
})

export default ServerHelpButton

