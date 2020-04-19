import React, { Component, useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert, Text, TouchableHighlight, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {getEmployees} from './employees';
import {deleteEmployee} from './employees';
import {updateEmployeeInformation} from './employees';

 export default class EmployeeManangement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: [],
        }
    }
//               OnButtonPress = async (orderID, completionStatus) => {
//                   const orderStatus = { orderID, completionStatus }
//                   // Backend function call.
//                   let completion = await updateOrderInformation(orderStatus)
//
//                   /* This is in function so that when the user clicks 'Ready'
//                    the order will disaper from the screen.*/
//                   let neworderDetails = await getTableOrders(this.props.tableId).then(
//                     order1 => {
//                       this.setState({ orderDetails: order1 }, function () {
//                         //console.log(this.state.orderDetails);
//                       })
//                     }
//                   )
//                 }

    OnUpdate = async (empID, newData) => {
        const updateEmp = { empID, newData }
        // Backend function call.
        let completion = await updateEmployeeInformation(updateEmp)
        /* This is in function so that when the user clicks 'Ready'
         the order will disappear from the screen.*/
        let newEmpDetails = await getEmployees(this.props.id).then(
          emp1 => {
            this.setState({ orderDetails: emp1 }, function () {
              console.log(this.state.orderDetails);
            })
          }
        )
      }

  getData = async () => {
     let tempData = await getEmployees()
       .then(data => {
         this.setState({ query : data })
         console.log(data);
       })
       .catch(error => {
         console.error(error)
       })
   }

   render () {

   {this.getData()}

   const mapInventory = this.state.query.map(index => {
      return (
      <View style={styles.employeeContainer}>
          <Text style={styles.employeeContainerText}>
              Name: {index.name}
          </Text>
          <Text style={styles.employeeContainerText}>
              Role: {index.role}
          </Text>
          <Text style={styles.employeeContainerText}>
              EMPid: {index.id}
          </Text>
          <Text style={styles.employeeContainerText}>
              Email: {index.email}
          </Text>
          <Text style={styles.employeeContainerText}>
              DOB: {index.dob}
          </Text>
          <Text style={styles.employeeContainerText}>
              Hourly Rate: {index.hourlyRate}
          </Text>

          <TouchableHighlight style={styles.removeEmployeeButton}
           onPress={() => deleteEmployee(index.id)}>
              <Text style={styles.menuText}>
                  Remove Employee
              </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.removeEmployeeButton}
           onPress={() => this.props.navigation.navigate('editEmployee')}>
              <Text style={styles.menuText}>
                  Edit Employee
              </Text>
          </TouchableHighlight>
      </View>
       )
   })

  return (

  <View style={styles.background}>
        <ScrollView>
            <TouchableHighlight style = {styles.buttons}
             onPress={() => this.props.navigation.navigate('SignUp')}>
                <Text style={styles.menuText}>
                    Add New Employee
                </Text>
             </TouchableHighlight>
             <TouchableHighlight style = {styles.buttons}
              onPress={() => this.getData()}>
                 <Text style={styles.menuText}>
                     Update Employees
                 </Text>
             </TouchableHighlight>

        {mapInventory}
        </ScrollView>
  </View>
  );
 }
}

const styles = StyleSheet.create({

    background: {
            flex: 1,
            backgroundColor: '#3498db',
            alignItems: 'center'
        },

        buttons: {
            alignItems: 'center',
            justifyContent: 'center',
            height: 60,
            backgroundColor: '#595959',
            margin: 20
        },

        removeEmployeeButton: {
            alignSelf: 'stretch',
            height: 40,
            alignItems: 'center',
            backgroundColor: '#ff6600',
            margin: 10
        },

    menuText: {
        fontSize: 21,
        color: '#ffffff',
    },

    employeeContainer:
    {
        backgroundColor: '#3333ff',
        height: 450,
        width: 800,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        margin: 40,
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
        paddingLeft: 400,
        alignItems: 'center'
    },
})



