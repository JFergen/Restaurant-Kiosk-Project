import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Background from '../../assets/background.jpeg';
import Header from './header/header';   // Header of different buttons
import Menu from './menu/menu';
import styles from './styles';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entrees: props.entrees,
            beverages: props.beverages,
            desserts: props.desserts
        }
    }

    render() {
        return (
            <ImageBackground
                source = {Background}
                style = {{ height: '100%', width: '100%' }}
            >
                <View style = {styles.container}>
                    {/* Header */}
                    <View style = {styles.headerContainer}>
                        <Header navigation = {this.props.navigation}/>
                    </View>
            
                    <Text style = {{fontSize: 32, fontWeight: 'bold', alignSelf: 'center'}}>Menu:</Text>
            
                    {/* Menu */}
                    <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginLeft: 40, marginRight: 40}}>
                        {/* Entrees */}
                        <View style = {{height: 600, width: 325, borderWidth: 5, borderColor: 'black'}}>
                            {/* A list of items with a name, picture, and "+" and "-" buttons */}
                            <Menu menuList = {this.state.entrees}/>
                        </View>
            
                        {/* Sides */}
                        <View style = {{height: 600, width: 325, borderWidth: 5, borderColor: 'black'}}>
                            {/* A list of items with a name, picture, and "+" and "-" buttons */}
                            <Menu menuList = {this.state.beverages}/>
                        </View>
            
                        {/* Drinks? */}
                        <View style = {{height: 600, width: 325, borderWidth: 5, borderColor: 'black'}}>
                            {/* A list of items with a name, picture, and "+" and "-" buttons */}
                            <Menu menuList = {this.state.desserts}/>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default MainContainer;