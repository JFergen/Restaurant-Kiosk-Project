import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Header from './header/header';   // Header of different buttons
import styles from './styles';

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <KeyboardAwareScrollView contentContainerStyle = {styles.container}>
                <View>
                    <Header navigation = {this.props.navigation}/>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

export default MainContainer;