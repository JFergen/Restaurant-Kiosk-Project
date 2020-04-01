import React, { Component } from 'react';
import { View, Image, FlatList, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import GreenPlus from '../../../assets/menu/green-plus.png';
import RedMinus from '../../../assets/menu/red-minus.png';
import styles from './styles.js';
import * as orders from '../../../menu_operations.js'
import { addCustomer } from '../../../customers';

let DATA = [
    {
        id: '1',
        title: 'Cheese burger',
        price: 8,
        qty: 0,
        uri: 'https://cdn.foodbeast.com/wp-content/uploads/2017/06/Webp.net-compress-image.jpg'
    },
    {
        id: '2',
        title: 'Hot dog',
        price: 4,
        qty: 0,
        uri: 'https://awrestaurants.com/sites/default/files/hotdog_0.png'
    },
    {
        id: '3',
        title: 'Sandwich',
        price: 5,
        qty: 0,
        uri: 'https://image.shutterstock.com/image-photo/sandwich-ham-cheese-tomatoes-lettuce-600w-1027873330.jpg'
    },
];

let item = {
    name: "Pizza",
    price: 1.66
};

class Menu extends Component {
    constructor() {
        super();
        this.state = {items: DATA};
    }


    incrementQty = (id) => {
        customer = {
            name: 'Aaron Shehan',
            email: 'aaronshehan28@gmail.com',
            password: '12345',
        }

        addCustomer(customer);

        let newItems = [...this.state.items];

        var i;
        for(i = 0; i < newItems.length; ++i) {
            if(newItems[i].id === id) {
                ++newItems[i].qty;
                break;
            }
        }

        this.setState({items: newItems});
    }

    decrementQty = (id) => {
        let newItems = [...this.state.items];

        var i;
        for(i = 0; i < newItems.length; ++i) {
            if(newItems[i].id === id) {
                if (newItems[i].qty == 0) {
                    alert("Can not go below 0");
                    break;
                }
                
                --newItems[i].qty;
                break;
            }
        }

        this.setState({items: newItems});
    }

    render() {
        return (
            <FlatList
                data = {DATA}
                renderItem = {({item}) => (
                    <View style = {styles.container}>
                        <View style = {{flex: 1}}>
                            <Text style = {{fontSize: 20}}>{item.title} - ${item.price}</Text>
                            <TouchableHighlight
                                onPress = {() => alert(item.title)}
                                underlayColor = 'transparent'
                            >
                                <Image
                                    style = {{height: 110, width: 150}}
                                    source = {{uri: item.uri}}
                                />
                            </TouchableHighlight>
                        </View>
    
                        <View style = {{flex: 10, alignItems: 'flex-end'}}>
                            <Text style = {{fontSize: 45, marginRight: 55}}>{item.qty}</Text>
                            
                            <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <TouchableHighlight
                                    underlayColor = 'transparent'
                                    onPress = {() => this.incrementQty(item.id)}

                                >
                                    <Image 
                                        source = {GreenPlus}
                                        style = {{height: 64, width: 64}}
                                    />
                                </TouchableHighlight>
                    
                                <TouchableHighlight
                                    underlayColor = 'transparent'
                                    onPress = {() => this.decrementQty(item.id)}
                                    style = {{marginRight: 5}}
                                >
                                    <Image source = {RedMinus}/>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                )}
                keyExtractor = {item => item.id}
            />
        )
    }
};

export default Menu;