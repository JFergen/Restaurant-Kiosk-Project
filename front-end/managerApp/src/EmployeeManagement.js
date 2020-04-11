import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';


export default class EmployeeManagement extends Component {

    static navigationOptions = {
        title: 'Employee Management',
        headerStyle: {
            backgroundColor: 'black'
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30
        }
    }
    render()
    {
        return (
            <View style={styles.container}>
                <TextInput 
                placeholder="Employee Name"
                placeholderTextColor='black'
                style={styles.input}
                />
                <TextInput 
                placeholder="Employee ID"
                placeholderTextColor='black'
                style={styles.input}
                />
            </View>
            <View style={styles.buttonRight}> 
                <Button 
                title="Add Employee" onPress = {onPress}>
                </Button>
            </View>
            <View style={styles.buttonLeft}>
                <Button
                title="Remove Employee" onPress = {onPress}>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "black"
    },
    input: {
        height: 40,
        backgroundColor: 'white',
        marginBottom: 10,
        color: 'black',
        paddingHorizontal: 10
    },
    buttonLeft: {
        padding: 20,
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    buttonRight: {
        position: 'absolute',
        bottom: 0,
        right: 5
    },
})
