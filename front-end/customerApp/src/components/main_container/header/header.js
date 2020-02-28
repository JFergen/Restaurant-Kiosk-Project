import React, { Component } from 'react';
import { View, Button } from 'react-native';
import styles from './styles.js';

class Header extends Component {
    render() {
        return (
            <View style = {styles.header}>
                <Button
                    style = {}
                    title = "Help"
                    onPress = {() => alert("beep")}
                />
            </View>
        )
    }
};

export default Header;