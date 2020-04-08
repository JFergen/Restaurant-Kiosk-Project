import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import UserIcon from '../../../assets/registration/user_icon.png';
import LeftArrow from '../../../assets/header/left-arrow.png';
import validator from 'validator';
import styles from './styles.js';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
        }
        this.textStyleEmail = styles.textInput
        this.textStylePass = styles.textInput
    }

    updateFirstName = (text) => {
        this.setState({ firstName: text })
    }

    updateLastName = (text) => {
        this.setState({ lastName: text })
    }

    updateEmail = (text) => {
        this.setState({ email: text })
    }

    // Checks if correct email format
    validEmail = (emailText) => {
        if(validator.isEmail(emailText)){
            this.textStyleEmail = styles.textInput
        } else {
            this.textStyleEmail = styles.textInputErr
            this.setState({ emailDialog: true })
        }
    }

    validPassword = (passwordText) => {
        if(passwordText.length >= 6) {
            this.textStylePass = styles.textInput
        } else {
            this.textStylePass = styles.textInputErr
            this.setState({ passwordDialog: true })
        }
    }

    updatePassword = (text) => {
        this.setState({ password: text })
    }

    render() {
        return (
            <View style = {styles.container}>
                <TouchableOpacity
                        style = {styles.arrowBackground}
                        onPress = {() => this.props.navigation.goBack()}
                    >
                        <Image source = {LeftArrow}/>
                </TouchableOpacity>
                <Image source = {UserIcon}/>
                <Text style = {{
                    fontSize: 50, 
                    fontWeight: 'bold'
                    }}>
                        Login
                </Text>
                <View style = {styles.textFields}>
                    <Text style = {styles.textFieldLabel}>Email Address</Text>
                    <View style = {styles.textField}>
                        <TextInput 
                            style = {this.textStyleEmail}
                            autoCorrect = {false}
                            autoCapitalize = {'none'}
                            returnKeyType = { "next" }
                            keyboardType = { 'email-address' }
                            textContentType = { 'emailAddress' }
                            onChangeText = {this.updateEmail}
                            onSubmitEditing = {({ nativeEvent }) => { this.validEmail(nativeEvent.text); this.secondTextInput.focus();  }}
                            blurOnSubmit = {false}
                        />
                    </View>
                    <Text style = {styles.textFieldLabel}>Password</Text>
                    <View style = {styles.textField}>
                        <TextInput 
                            style = {this.textStylePass}
                            autoCorrect = {false}
                            secureTextEntry = {true}
                            autoCapitalize = {'none'}
                            placeholder = {"6 or more characters"}
                            ref = {(input) => { this.secondTextInput = input }}
                            onChangeText = {this.updatePassword}
                            onSubmitEditing = {({ nativeEvent }) => { this.validPassword(nativeEvent.text) }}
                        />
                    </View>
                </View>
            </View> 
        )
    }
};

export default Login;