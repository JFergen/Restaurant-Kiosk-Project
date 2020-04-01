/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet,} from 'react-native';

import firebase from '@react-native-firebase/app';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
});

export const firebaseCredentials = Platform.select({
  ios: 'https://invertase.link/firebase-ios',
  android: 'https://invertase.link/firebase-android',
});
export default StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
    borderWidth: 10,
    borderColor: "white"
    },
  textHeader: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center'
    },
  textOrders:
    {   
     color: 'white',
     fontSize: 30,
     borderRadius: 20,
     textAlign: 'left',
     fontWeight:'bold'
    },
   container2: {
      flex: 1,
      paddingTop: 40
    },

    header2: {
     height: 60,
     backgroundColor: '#33ABF9',
     padding: 15,
    },
   buttonContainer: {
     width: 150,
     height: 50,
     borderRadius: 100,
    color: '#33ABF9'
     },
    background: {
     width: '100%',
     height: '100%'
    },
    diveIn: {
     backgroundColor: 'navy',
     color: 'white',
     width: "65%",
     borderRadius: 100,
     textAlign: 'center',
     fontWeight: 'bold',
     marginLeft: '18%',
     padding: "2%",
     fontSize:  33,
     marginTop: '120%'
    }
    })
