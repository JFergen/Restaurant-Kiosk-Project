import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';


export default class AddRemove extends Component {


    static navigationOptions = {
        title: 'Employee Managment',
        headerStyle: {
            backgroundColor: 'white'
        },
        headerTintColor: 'black',
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
                placeholderTextColor='rgba(255,255,255,0.7)'
                style={styles.input}
                />
                <TextInput 
                placeholder="Employee ID"
                placeholderTextColor='rgba(255,255,255,0.7)'
                style={styles.input}
                />

                <Button
                style={styles.addPosition} 
                title="Add Employee" onPress = {() => Alert.alert("Employee has been added.")}>
                </Button>

                <Button
                style={styles.removePosition}
                title="Remove Employee" onPress = {() => Alert.alert("Employee has been removed.")}>
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'gray',
        marginBottom: 10,
        color: 'white',
        paddingHorizontal: 10
    },

})
