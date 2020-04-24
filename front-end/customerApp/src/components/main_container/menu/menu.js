import React, { Component } from 'react';
import { View, Image, FlatList, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import GreenPlus from '../../../assets/menu/green-plus.png';
import RedMinus from '../../../assets/menu/red-minus.png';
import styles from './styles.js';
import * as orders from '../../../orders.js'
import * as customers from '../../../customers.js'
import * as menuOperations from '../../../menu_operations.js'
import * as employees from '../../../employees.js'
import * as tables from '../../../tables.js'
import * as inventory from '../../../inventory.js'
import * as question from '../../../question.js'


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
      
        // let orderobj = {
        //     completionStatus: false,
        //     customerID: 'l8qDPeaGzOC4egZMW5hW',
        //     orderID: 'v6J7iJmyHxW5CIdCosvK',
        //     orderedItems: ['Pizza', 'Apple Pie'],
        //     price: 8.99,
        //     waitstaff: '4MfW9403U5WqT5cSIgbG'
        // }
        // orders.updateOrderInformation(orderobj)
        // let doc = {
        //     orderID: '03se9wEgk4rYmbBB9Bv4',
        //     questions: ['How was your experience at our restaurant', 'How was our service','How was the quality of our food'],
        //     review: ['poor', 'it sucked','meh']
        // }
        
        // question.addQuestionDoc(doc)
        let ApplePie = {
               allergens : ['Gluten','Milk'],
               calories : 1000,
               ingredients : ['Apple', 'Sugar', 'Flour','Milk'],
               name : 'Apple Pie',
               orderTotal : 3,
               popular : true,
               price : 8.99,
               quantity : 1,
               requests : 'none',
               type : 'dessert',
               uri : 'https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/5266844/910/607/m2/fpnw/wm1/wgnkqd9xgdgqtxrlnjc7trnc7tlqmqdzdpozbrtoxt7ngqdctm48ueswkvc9yham-.jpg?1540547491&s=5c34f52747a72484b42aa74b5f70473d'


            }

        let Burrito = {

            allergens : ['Cheese','Bread'],
               calories : 700,
               ingredients : ['Cheese', 'Bread'],
               name : 'Burrito',
               orderTotal : 2,
               popular : true,
               price : 4.99,
               quantity : 1,
               requests : 'none',
               type : 'entree',
               uri : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tacobueno.com%2Fassets%2Ffood%2Fburritos%2FBurrito_BOB_990x725.jpg%3Fv%3D1&f=1&nofb=1'


        }
        let items = [ApplePie,Burrito]
        menuOperations.setPopularItems('five dollar')
        //orders.confirmOrder("4CHZ6GZGNWfqK6PoDW5P","sIS8jNazm02eFwFZ7mrb",'1',items)
        .then(function(orders) {
            console.log(orders);
        })
        .catch((error) => {
            console.log("error getting order");
        });

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