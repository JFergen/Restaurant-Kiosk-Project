import React, { Component } from 'react';
import { View, Image, FlatList, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { setAppetizers, setBeverages, setDesserts, setEntrees } from '../../../store/actions/menu_actions';
import GreenPlus from '../../../assets/menu/green-plus.png';
import RedMinus from '../../../assets/menu/red-minus.png';
import styles from './styles.js';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.menuList
        };
        this.type = null;
    }

    componentDidMount() {
        let testType = this.state.items[0].type

        if (testType === 'appetizer') {
            this.type = 'appetizer'
        } else if (testType === 'beverage') {
            this.type = 'beverage'
        } else if (testType === 'entree') {
            this.type = 'entree'
        } else if (testType === 'dessert') {
            this.type = 'dessert'
        } else {
            alert('monkaS')
        }
    }

    updateArray = (type) => {
        if (type === 'appetizer') {
            this.props.setAppetizers(this.state.items)
        } else if (type === 'beverage') {
            this.props.setBeverages(this.state.items)
        } else if (type === 'entree') {
            this.props.setEntrees(this.state.items)
        } else if (type === 'dessert') {
            this.props.setDesserts(this.state.items)
        } else {
            alert('monkaS')
        }
    }

    incrementQty = (name) => {
        let newItems = [...this.state.items]

        for(i = 0; i < newItems.length; ++i) {
            if(newItems[i].name === name) {
                ++newItems[i].quantity;
                break;
            }
        }

        this.setState({items: newItems});
        this.updateArray(this.type)
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
        this.updateArray(this.type)
    }

    render() {
        return (
            <FlatList
                data = {this.props.menuList}
                renderItem = {({item}) => (
                    <View style = {styles.container}>
                        <View style = {{flex: 1}}>
                            <Text style = {styles.itemName}>{item.name} - ${item.price}</Text>
                            
                            <Image
                                style = {{height: 110, width: 150}}
                                source = {{uri: item.uri}}
                            />
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

const mapStateToProps = (state) => ({
    appetizers: state.menReducer.appetizers,
    beverages:  state.menReducer.beverages,
    entrees:    state.menReducer.entrees,
    desserts:   state.menReducer.desserts
})

export default connect(mapStateToProps, { setAppetizers, setBeverages, setEntrees, setDesserts })(Menu);