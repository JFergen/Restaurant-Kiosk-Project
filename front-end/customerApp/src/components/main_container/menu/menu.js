import React, { Component } from 'react';
import { View, Image, FlatList, Text, TouchableHighlight, ImageBackground } from 'react-native';
import Dialog, { DialogContent, DialogFooter, DialogButton, ScaleAnimation, DialogTitle } from 'react-native-popup-dialog';
import { connect } from 'react-redux';
import { setAppetizers, setBeverages, setDesserts, setEntrees, setFiveDollarMeals } from '../../../store/actions/menu_actions';
import GreenPlus from '../../../assets/menu/green-plus.png';
import RedMinus from '../../../assets/menu/red-minus.png';
import InfoIcon from '../../../assets/menu/Info-Icon.png';
import ChiliPeper from '../../../assets/menu/pepper.png';
import styles from './styles.js';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.menuList,
            infoDialog: false
        };
        this.type = null;
        this.index = 0;
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
        } else if (testType === 'five dollar') {
            this.type = 'five dollar'
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
        } else if (type === 'five dollar') {
            this.props.setFiveDollarMeals(this.state.items)
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

    displayInfoOverlay = (name) => {
        let newItems = [...this.state.items];

        var i;
        for(i = 0; i < newItems.length; ++i) {
            if(newItems[i].name === name) {
                this.index = i
                break;
            }
        }

        this.setState({ infoDialog: true })
    }

    renderInfo = () => {
        return (
            <Text style = {styles.infoText}>
                Common allergens:{'\t\t'}{this.state.items[this.index].allergens.join(', ')}{'\n'}
                Calories:{'\t\t'}{this.state.items[this.index].calories}{'\n'}
                Ingredients:{'\t\t'}{this.state.items[this.index].ingredients.join(', ')}{'\n'}
                Price:{'\t\t'}${this.state.items[this.index].price}{'\n'}
            </Text>
        )
    }

    renderPeper = (name) => {
        let newItems = [...this.state.items];

        var i;
        let found = false;

        for (i = 0; i < newItems.length; ++i) {
            if (newItems[i].name === name) {
                if (newItems[i].popular === true) {
                    found = true;
                    break;
                }
                
                break;
            }
        }

        if (found) {
            return (
                <ImageBackground
                    style = {{flexDirection: 'row', alignSelf: 'center'}}
                    source = {ChiliPeper}
                />
            )
        } else {
            return (
                null
            )
        }
    }

    dismissInfoDialog = () => {
        this.setState({ infoDialog: false })
    }

    render() {
        return (
            <>
            <FlatList
                data = {this.props.menuList}
                renderItem = {({item}) => (
                    <View style = {styles.container}>
                        <View style = {{flex: 1}}>
                            <Text style = {styles.itemName}>{item.name} - ${item.price}</Text>

                            {this.renderPeper(item.name)}
                            
                            <ImageBackground
                                style = {{height: 110, width: 150}}
                                source = {{uri: item.uri}}
                            >

                                <TouchableHighlight
                                    underlayColor = 'transparent'
                                    onPress = {() => this.displayInfoOverlay(item.name)}
                                >
                                    <Image source = {InfoIcon}/>
                                </TouchableHighlight>

                        </ImageBackground>
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







            {/* Dialog Boxes Here */}
            <Dialog
                visible = {this.state.infoDialog}
                dialogAnimation = {new ScaleAnimation()}
                dialogTitle = {
                    <DialogTitle title = {'Item Information'}/>
                }
                footer = {
                    <DialogFooter>
                        <DialogButton
                            text = "DISMISS"
                            onPress = {this.dismissInfoDialog}
                        />
                    </DialogFooter>
                }
            >
                <DialogContent>
                    {this.renderInfo()}
                </DialogContent>
            </Dialog>
        </>
        )
    }
};

const mapStateToProps = (state) => ({
    appetizers:         state.menReducer.appetizers,
    beverages:          state.menReducer.beverages,
    entrees:            state.menReducer.entrees,
    desserts:           state.menReducer.desserts,
    fiveDollarMeals:    state.menReducer.fiveDollarMeals
})

export default connect(mapStateToProps, {setAppetizers, setBeverages, setEntrees, setDesserts, setFiveDollarMeals})(Menu);