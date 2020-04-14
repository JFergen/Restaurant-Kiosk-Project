import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Alert, Text, TouchableHighlight, ScrollView } from 'react-native';


export default function ManageTips ({ navigation }) {
        return (
                <View style={styles.background}>

                    <ScrollView style= {styles.scrollView}>
                        <View style={styles.employeeContainer}>

                            <Text style={styles.menuText}>
                                Employee 1 Tips: $20.00 /wk
                            </Text>
                        </View>

                        <View style={styles.employeeContainer}>

                            <Text style={styles.menuText}>
                                Employee 2 Tips: $18.00 /wk
                            </Text>
                        </View>

                        <View style={styles.employeeContainer}>

                            <Text style={styles.menuText}>
                                Employee 3 Tips: $34.00 /wk
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            )
    }

const styles = StyleSheet.create({

    background: {
            flex: 1,
            backgroundColor: '#3498db'
        },

    menuText: {
        fontSize: 21,
        color: '#ffffff',
    },

    employeeContainer:
    {
        backgroundColor: '#3333ff',
        height: 80,
        width: 800,
        alignItems: 'center',
        margin: 30,
        padding: 10
    },

    employeeContainerText:
    {
        fontSize: 24,
        color: '#ffffff',

    },

    scrollView:
    {
        paddingLeft: 200,
        backgroundColor: '#ffffff',

    },

})
