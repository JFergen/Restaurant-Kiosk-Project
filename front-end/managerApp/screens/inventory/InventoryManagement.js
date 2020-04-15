import inventoryFunc from './inventoryFunc';
import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Alert, Text, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function updateInventory() {
//Function to update the current inventory using getInventory();
}

export default function InventoryManagement ({ navigation }) {

        return (
        <View style = {{flex: 1}}>
            <View style={styles.background}>
                <View style={styles.menu}>
                <TouchableHighlight style={styles.menuButton}
                 onPress={() => navigation.navigate('ViewInventory')}>
                        <Text style={styles.menuText}>
                            View/Edit Current Inventory
                        </Text>
                  </TouchableHighlight>

                 <TouchableHighlight style={styles.menuButton}
                  onPress={() => navigation.navigate('EditInventory')}>
                        <Text style={styles.menuText}>
                            Add/Remove Items
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.menuButton}
                     onPress={() => alert('Update Inventory')}>
                        <Text style={styles.menuText}>
                            Inventory Update
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.menuButton}
                     onPress={() => navigation.navigate('VendorGuide')}>
                        <Text style={styles.menuText}>
                            Vendor Resupply Guide
                        </Text>
                    </TouchableHighlight>
                   </View>
                </View>
            </View>
        );
    }

const styles = StyleSheet.create({
    menuButton: {
        width: 220,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 5,
        backgroundColor: '#3333ff'
    },

    menuText: {
        fontSize: 24,
        color: '#ffffff',
        textAlign: 'center'
    },

    menu: {
        margin: 100,
        paddingTop: 100,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
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