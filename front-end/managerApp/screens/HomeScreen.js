import React, {Component, useState} from 'react';
import { StyleSheet, ImageBackground, Text, View, Button, TouchableHighlight,} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Background from '../assets/background.jpeg';

function HomeScreen ({ navigation }) {
    return (
    <View style= {{flex: 1}}>
        <View style ={styles.background}>
            <TouchableHighlight style={styles.logoutButton}
             onPress={() => navigation.navigate('Login')}>
                <Text style={styles.logoutText}>
                    LOGOUT
                </Text>
            </TouchableHighlight>

            <View style={styles.mainMenu}>
                    <TouchableHighlight style={styles.menuButton}
                     onPress={() => navigation.navigate('Inventory')}>
                         <Text style = {styles.menuText}>
                             Inventory
                         </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.menuButton}
                     onPress={() => navigation.navigate('MenuManagement')}>
                         <Text style = {styles.menuText}>
                             Menu Management
                         </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.menuButton}
                     onPress={() => navigation.navigate('MetricsPage')}>
                         <Text style = {styles.menuText}>
                             Metrics
                         </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.menuButton}
                     onPress={() => navigation.navigate('ApproveTimes')}>
                         <Text style = {styles.menuText}>
                             Approve Times
                         </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.menuButton}
                     onPress={() => navigation.navigate('ManageTips')}>
                         <Text style = {styles.menuText}>
                             Manage Tips
                         </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.menuButton}
                     onPress={() => navigation.navigate('EmployeeManagement')}>
                         <Text style = {styles.menuText}>
                             Manage Employees
                         </Text>
                    </TouchableHighlight>
            </View>
       </View>
    </View>
    )
}


const styles = StyleSheet.create({

    background: {
        flex: 1,
        backgroundColor: '#3498db'
    },

    logoutButton: {
        justifyContent: 'flex-start',
        height: 100,
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
        width: 220,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        padding: 5,
        backgroundColor: '#3333ff'
    },

    menuText: {
        fontSize: 21,
        color: '#ffffff',
    },

    logoutText: {
            color: '#ffffff',
            fontSize: 20,
        },
})

export default HomeScreen;