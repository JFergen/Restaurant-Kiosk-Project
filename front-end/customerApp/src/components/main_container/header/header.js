import React, { Component } from 'react';
import { View, TouchableHighlight, Image, Text } from 'react-native';
import Dialog, { DialogContent, DialogFooter, DialogButton, ScaleAnimation, DialogTitle } from 'react-native-popup-dialog';
import Overlay from 'react-native-modal-overlay';
import { connect } from 'react-redux';
import LeftArrow from  '../../../assets/header/left-arrow.png';
import LoginIcon from '../../../assets/header/login.png';
import WaiterIcon from '../../../assets/header/waiter.png';
import DrinkIcon from '../../../assets/header/drink.png';
import GameIcon from '../../../assets/header/joystick.png';
import CartIcon from '../../../assets/header/shopping-cart.png';
import RightArrow from '../../../assets/header/right-arrow.png';
import {callServer} from '../../../callServer';
import styles from './styles.js';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serverDialog: false,
            serverCalled: false,
            drinkOverlay: false,
            gamesOverlay: false,
            showLeftArrow: false,
            showRightArrow: true
        }
        this.loginSuccessful = this.props.navigation.getParam('loginSuccessful');
    }

    renderLoginIcon = () => {
        if (!this.loginSuccessful) {
            return (
                <TouchableHighlight
                    style = {styles.arrowBackground}
                    onPress = {() => { this.props.navigation.navigate('Register') }}
                >
                    <Image source = {LoginIcon}/>
                </TouchableHighlight>
            )
        } else {
            return null
        }
    }

    renderLeftArrow = () => {
        if (this.state.showLeftArrow) {
            return (
                <TouchableHighlight
                    style = {styles.arrowBackground}
                    onPress = {() => this.scrollLeft()}
                >
                    <Image source = {LeftArrow}/>
                </TouchableHighlight>
            )
        }
    }

    renderRightArrow = () => {
        if (this.state.showRightArrow == true) {
            return (
                <TouchableHighlight
                    style = {styles.arrowBackground}
                    onPress = {() => this.scrollRight()}
                >
                    <Image source = {RightArrow}/>
                </TouchableHighlight>
            )
        }
    }

    scrollRight = () => {
        global.scroll.scrollToEnd({animated: true})

        this.setState({
            showRightArrow: false,
            showLeftArrow: true
        })
    }

    scrollLeft = () => {
        global.scroll.scrollTo({x: 0, y: 0, animated: true});

        this.setState({
            showLeftArrow: false,
            showRightArrow: true
        })
    }

    alertServer = async () => {
        let callServerSuc;

        callServerSuc = await callServer(global.tableNumber);

        if (callServerSuc == true) {
            this.setState({
                serverDialog: false,
                serverCalled: true
            })
        } else {
            this.setState({ serverDialog: false })
            alert('Server could not be called. Try again.')
        }
    }

    goToCart = () => {
        let allItems = [];
        let buyingItems = [];

        allItems = this.props.appetizers.concat(this.props.beverages, this.props.entrees, this.props.desserts)

        for (var i = 0; i < allItems.length; i++) {
            if (allItems[i].quantity > 0) {
                for (var j = 0; j < allItems[i].quantity; j++) {
                    buyingItems.push(allItems[i])
                }
            }
        }

        if (buyingItems.length === 0) {
            alert('Shopping Cart is empty. Use \'+\' and \'-\' to order items')
        } else {
            this.props.navigation.navigate('Pay', {
                items: buyingItems
            })
        }
    }

    dismissServerDialog = () => {
        this.setState({
            serverDialog: false,
            serverCalled: false
        })
    }

    onClose = () => {
        this.setState({
            drinkOverlay: false,
            gamesOverlay: false
        })
    }

    render() {
        return (
            <View style = {styles.header}>
                {this.renderLoginIcon()}

                {this.renderLeftArrow()}

                <TouchableHighlight 
                    style = {styles.buttonBackground}
                    onPress = {() => this.setState({serverDialog: true})}
                >
                    <Image source = {WaiterIcon}/>
                </TouchableHighlight>

                <TouchableHighlight 
                    style = {styles.buttonBackground}
                    onPress = {() => this.setState({drinkOverlay: true})}
                >
                    <Image source = {DrinkIcon}/>
                </TouchableHighlight>

                <TouchableHighlight 
                    style = {styles.buttonBackground}
                    onPress = {() => this.setState({gamesOverlay: true})}
                >
                    <Image source = {GameIcon}/>
                </TouchableHighlight>

                <TouchableHighlight 
                    style = {styles.buttonBackground}
                    onPress = {() => this.goToCart()}
                >
                    <Image source = {CartIcon}/>
                </TouchableHighlight>
                
                <View style = {styles.rightIcons}>
                    {this.renderRightArrow()}
                </View>













                {/* Overlays Here */}
                <Overlay
                    visible = {this.state.drinkOverlay}
                    childrenWrapperStyle = {{width: 600, height: 800, alignSelf: 'center'}}
                    onClose = {this.onClose}
                    closeOnTouchOutside = {true}
                    animationType = {'zoomIn'}
                >
                    <Text>This is a test for DRINKS</Text>
                </Overlay>

                <Overlay
                    visible = {this.state.gamesOverlay}
                    childrenWrapperStyle = {{width: 600, height: 800, alignSelf: 'center'}}
                    onClose = {this.onClose}
                    closeOnTouchOutside = {true}
                    animationType = {'zoomIn'}
                >
                    <Text>This is a test for GAMES</Text>
                </Overlay>

                {/* Dialog Boxes Here */}
                <Dialog
                    visible = {this.state.serverDialog}
                    dialogAnimation = {new ScaleAnimation()}
                    dialogTitle = {
                        <DialogTitle title = "Call Server"/>
                    }
                    footer = {
                        <DialogFooter>
                            <DialogButton
                                text = "REQUEST SERVER"
                                onPress = {this.alertServer}
                            />
                            <DialogButton
                                text = "DISMISS"
                                onPress = {this.dismissServerDialog}
                            />
                        </DialogFooter>
                    }
                >
                    <DialogContent>
                        <Text style = {{fontWeight: 'bold', fontSize: 20}}>Would you like to request a server to come to your table?</Text>
                    </DialogContent>
                </Dialog>

                <Dialog
                    visible = {this.state.serverCalled}
                    dialogAnimation = {new ScaleAnimation()}
                    footer = {
                        <DialogFooter>
                            <DialogButton
                                text = "DISMISS"
                                onPress = {this.dismissServerDialog}
                            />
                        </DialogFooter>
                    }
                >
                    <DialogContent>
                        <Text style = {{fontWeight: 'bold', fontSize: 25}}>A server has been called.</Text>
                    </DialogContent>
                </Dialog>
            </View>
        )
    }
};

const mapStateToProps = (state) => ({
    appetizers: state.menReducer.appetizers,
    beverages:  state.menReducer.beverages,
    entrees:    state.menReducer.entrees,
    desserts:   state.menReducer.desserts
})

export default connect(mapStateToProps, {})(Header);