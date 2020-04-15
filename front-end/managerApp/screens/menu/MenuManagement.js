import menu_operations from './menu_operations';
import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Alert, Text, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function MenuManagement ({ navigation }) {

        return (
        <View style = {{flex: 1}}>
            <View style={styles.background}>
                <View style={styles.menu}>
                <TouchableHighlight style={styles.menuButton}
                 onPress={() => navigation.navigate('ViewMenu')}>
                        <Text style={styles.menuText}>
                            View Menu
                        </Text>
                  </TouchableHighlight>

                 <TouchableHighlight style={styles.menuButton}
                  onPress={() => navigation.navigate('EditMenu')}>
                        <Text style={styles.menuText}>
                            Add/Edit Menu
                        </Text>
                    </TouchableHighlight>

                   </View>
                </View>
            </View>
        );
    }

const styles = StyleSheet.create({
    menuButton: {
        width: 240,
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
        //margin: 100,
        padding: 5,
        backgroundColor: '#3333ff'
    },

    menuText: {
        fontSize: 24,
        color: '#ffffff',
        textAlign: 'center'
    },

    menu: {
        margin: 275,
        //paddingTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexShrink: 2.0,
    },

    background: {
        flex: 1,
        backgroundColor: '#3498db'
    },
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