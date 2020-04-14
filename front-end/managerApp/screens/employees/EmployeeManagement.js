import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Alert, Text, TouchableHighlight, ScrollView } from 'react-native';

/* This function gives the user the ability to look at all the current employees and hire/fire new ones
*/

export default function EmployeeManangement ({ navigation }) {
        return (
            <View style={styles.background}>
                <TouchableHighlight style={styles.addEmployeeButton}
                 onPress={() => navigation.navigate('NewEmployee')}>
                    <Text style={styles.menuText}>
                        Add New Employee
                    </Text>
                </TouchableHighlight>

                <ScrollView style= {styles.scrollView}>
                    <View style={styles.employeeContainer}>
                        <Text style={styles.employeeContainerText}>
                            Name: Tony Romo
                        </Text>
                        <Text style={styles.employeeContainerText}>
                            Role: Waiter
                        </Text>
                        <Text style={styles.employeeContainerText}>
                            EMPid: 92osn9f8o2n09sdc
                        </Text>

                        <TouchableHighlight style={styles.removeEmployeeButton}
                         onPress={() => alert('Employee Removed')}>
                            <Text style={styles.menuText}>
                                Remove Employee
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.employeeContainer}>
                        <Text style={styles.employeeContainerText}>
                            Name: Tom Brady
                        </Text>
                        <Text style={styles.employeeContainerText}>
                            Role: Waiter
                        </Text>
                        <Text style={styles.employeeContainerText}>
                            EMPid: 98234j590df8gjal
                        </Text>

                        <TouchableHighlight style={styles.removeEmployeeButton}
                         onPress={() => alert('Employee Removed')}>
                            <Text style={styles.menuText}>
                                Remove Employee
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.employeeContainer}>
                         <Text style={styles.employeeContainerText}>
                             Name: Joe Montana
                         </Text>
                         <Text style={styles.employeeContainerText}>
                             Role: Assistant Manager
                         </Text>
                         <Text style={styles.employeeContainerText}>
                             EMPid: 09834jn98dh298wksd8f2
                         </Text>

                         <TouchableHighlight style={styles.removeEmployeeButton}
                          onPress={() => alert('Employee Removed')}>
                             <Text style={styles.menuText}>
                                 Remove Employee
                             </Text>
                         </TouchableHighlight>
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

        removeEmployeeButton: {
            alignSelf: 'stretch',
            height: 40,
            //width: 200,
            alignItems: 'center',
            backgroundColor: '#ff6600',

        },

    addEmployeeButton: {
            height: 100,
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

    employeeContainer:
    {
        backgroundColor: '#3333ff',
        height: 200,
        width: 800,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
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
        backgroundColor: '#ffffff',
        paddingLeft: 200,
    },
})

