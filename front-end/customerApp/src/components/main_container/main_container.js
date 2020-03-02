import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './header/header';   // Header of different buttons
import Menu from './menu/menu';
import styles from './styles';

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
                        <Menu/>
                    </View>

                    {/* Sides */}
                    <View style = {{height: 600, width: 325, borderWidth: 5, borderColor: 'black'}}>
                        {/* A list of items with a name, picture, and "+" and "-" buttons */}
                        <Menu/>
                    </View>

                    {/* Drinks? */}
                    <View style = {{height: 600, width: 325, borderWidth: 5, borderColor: 'black'}}>
                        {/* A list of items with a name, picture, and "+" and "-" buttons */}
                        <Menu/>
                    </View>
                </View>
            </View>
        );
    }
}

export default MainContainer;