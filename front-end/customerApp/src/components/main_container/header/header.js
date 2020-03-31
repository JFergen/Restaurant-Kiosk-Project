import React, { Component } from 'react';
import { View, TouchableHighlight, Image, TouchableOpacity, Text } from 'react-native';
import LoginIcon from '../../../assets/header/login.png';
import WaiterIcon from '../../../assets/header/waiter.png';
import DrinkIcon from '../../../assets/header/drink.png';
import GameIcon from '../../../assets/header/joystick.png';
import CartIcon from '../../../assets/header/shopping-cart.png';
import RightArrow from '../../../assets/header/right-arrow.png';
import styles from './styles.js';

class Header extends Component {
    render() {
        return (
            <View style = {styles.header}>
                <TouchableHighlight
                    style = {styles.buttonBackground}
                    onPress = {() => { this.props.navigation.navigate('Login') }}
                >
                    <Image source = {LoginIcon}/>
                </TouchableHighlight>

                <TouchableHighlight 
                    style = {styles.buttonBackground}
                    onPress = {() => alert("help button")}
                >
                    <Image source = {WaiterIcon}/>
                </TouchableHighlight>

                <TouchableHighlight 
                    style = {styles.buttonBackground}
                    onPress = {() => alert("free refill")}
                >
                    <Image source = {DrinkIcon}/>
                </TouchableHighlight>

                <TouchableHighlight 
                    style = {styles.buttonBackground}
                    onPress = {() => alert("games")}
                >
                    <Image source = {GameIcon}/>
                </TouchableHighlight>

                <TouchableHighlight 
                    style = {styles.buttonBackground}
                    onPress = {() => alert("cart")}
                >
                    <Image source = {CartIcon}/>
                </TouchableHighlight>
                
                <View style = {styles.rightIcons}>
                    {/* <TouchableHighlight 
                        style = {styles.arrowBackground}
                        onPress = {() => alert("cart")}
                    >
                        <Image source = {LeftArrow}/>
                    </TouchableHighlight> */}
                    <TouchableHighlight 
                        style = {styles.arrowBackground}
                        onPress = {() => alert("cart")}
                    >
                        <Image source = {RightArrow}/>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
};

export default Header;