import React, { Component, useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Login ({ navigation }) {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('../assets/mamba.jpg')}
                    />
                    <Text styles={styles.title}>
                        Welcome User
                    </Text>
                </View>
                <View style = {styles.background}>
                    <View style={styles.container}>
                        <TextInput
                             placeholder="Username"
                             placeholderTextColor='rgba(255,255,255,0.7)'
                             returnKeyType="next"
                             //onSubmitEditing={() => this.passwordInput.focus()}
                             keyboardType="email-address"
                             autoCapitalize="none"
                             autoCorrect={false}
                             style={styles.input}
                             />
                             <TextInput
                             placeholder="Password"
                             placeholderTextColor='rgba(255,255,255,0.7)'
                             returnKeyType="go"
                             secureTextEntry = {true}
                             style={styles.input}
                             //ref={(input) => this.passwordInput = input}
                             />
                         <TouchableOpacity style={styles.buttonContainer}
                          onPress={() => navigation.navigate('Home')}>
                             <Text style={styles.buttonText}>LOGIN</Text>
                         </TouchableOpacity>
                     </View>
                </View>
            </KeyboardAvoidingView>
        );
    }

const styles = StyleSheet.create({

    background: {
        flex: 1,
        backgroundColor: '#3498db'
    },

    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },

    logoContainer: {
      alignItems: 'center',
      flexGrow: 1,  
      justifyContent: 'center'
    },

    logo: {
        width: 150,
        height: 150,
    },

    title: {
        color: '#ffffff',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 30,
    },

    input: {
        height: 60,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10
    },

    buttonContainer: {
        height: 40,
        backgroundColor: '#2980b9',
        paddingVertical: 10
    },

    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});

export default Login;
