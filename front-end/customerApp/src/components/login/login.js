import React, { Component } from 'react';
import { View, TouchableHighlight, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import UserIcon from '../../assets/login/user_icon.png';
import TextBox from '../../assets/login/text_box.png';
import styles from './styles.js';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            emailDialog: false,
            password: "",
            passwordDialog: false,
            overAge: false,
            overAgeDialog: false,
            platform: null,
            errDialog: false,
            errMsg: null
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
            <KeyboardAwareScrollView
                contentContainerStyle = {styles.container}
                enableOnAndroid = {true}
            >
                <View style = {styles.container}>
                    <Image source = {UserIcon}/>
                    <Text style = {{fontSize: 50, fontWeight: 'bold'}}>Login</Text>
                    <View style = {styles.textFields}>
                        <Text style = {styles.textFieldLabel}>First Name</Text>
                        <View style = {styles.textField}>
                            <Image style = {styles.textBox} source = {TextBox}/>
                            <TextInput
                                style = {styles.textInput}
                                autoCorrect = {false}
                                returnKeyType = {"next"}
                                onChangeText = {this.updateFirstName}
                                onSubmitEditing = {() => { this.secondTextInput.focus() }}
                                blurOnSubmit = {false}
                            />
                        </View>
                        <Text style = {styles.textFieldLabel}>Last Name</Text>
                        <View style = {styles.textField}>
                            <Image style = {styles.textBox} source = {TextBox}/>
                            <TextInput 
                                style = {styles.textInput}
                                autoCorrect = {false}
                                ref = {(input) => { this.secondTextInput = input }}
                                returnKeyType = {"next"}
                                onChangeText = {this.updateLastName}
                                onSubmitEditing = {() => { this.thirdTextInput.focus() }}
                                blurOnSubmit = {false}
                            />
                        </View>
                        <Text style = {styles.textFieldLabel}>Email Address</Text>
                        <View style = {styles.textField}>
                            <Image style = {styles.textBox} source = {TextBox}/>
                            <TextInput 
                                style = {styles.textInput}
                                autoCorrect = {false}
                                autoCapitalize = {'none'}
                                returnKeyType = { "next" }
                                keyboardType = { 'email-address' }
                                textContentType = { 'emailAddress' }
                                onChangeText = {this.updateEmail}
                                onSubmitEditing = {({ nativeEvent }) => { this.validEmail(nativeEvent.text); this.fourthTextInput.focus();  }}
                                blurOnSubmit = {false}
                            />
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
            
        )
    }
};

export default Login;