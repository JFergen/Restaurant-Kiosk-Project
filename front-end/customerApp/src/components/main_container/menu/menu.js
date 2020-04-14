import React, { Component } from 'react';
import { View, Image, FlatList, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import GreenPlus from '../../../assets/menu/green-plus.png';
import RedMinus from '../../../assets/menu/red-minus.png';
import styles from './styles.js';
import * as inventory from '../../../inventory.js'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.menuList
        };
    }

    incrementQty = (name) => {
        let newItems = [...this.state.items];

        var i;
        for(i = 0; i < newItems.length; ++i) {
            if(newItems[i].name === name) {
                ++newItems[i].quantity;
                break;
            }
        }

        this.setState({items: newItems});
    }

    decrementQty = (name) => {
        let newItems = [...this.state.items];

        var i;
        for(i = 0; i < newItems.length; ++i) {
            if(newItems[i].name === name) {
                if (newItems[i].quantity == 0) {
                    alert("Can not go below 0");
                    break;
                }
                
                --newItems[i].quantity;
                break;
            }
        }
        this.setState({items: newItems});
    }

    render() {
        return (
            <FlatList
                data = {this.state.items}
                renderItem = {({item}) => (
                    <View style = {styles.container}>
                        <View style = {{flex: 1}}>
                            <Text style = {{
                                paddingLeft: 5,
                                fontSize: 22,
                                fontWeight: 'bold',
                                fontStyle: 'italic'
                            }}>
                                {item.name} - ${item.price}
                            </Text>
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
                            <Text style = {{fontSize: 45, marginRight: 55}}>{item.quantity}</Text>
                            
                            <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <TouchableHighlight
                                    underlayColor = 'transparent'
                                    onPress = {() => this.incrementQty(item.name)}

                                >
                                    <Image 
                                        source = {GreenPlus}
                                        style = {{height: 64, width: 64}}
                                    />
                                </TouchableHighlight>
                    
                                <TouchableHighlight
                                    underlayColor = 'transparent'
                                    onPress = {() => this.decrementQty(item.name)}
                                    style = {{marginRight: 5}}
                                >
                                    <Image source = {RedMinus}/>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                )}
                keyExtractor = {(item, index) => index.toString()}
            />
        )
    }
};

export default Menu;