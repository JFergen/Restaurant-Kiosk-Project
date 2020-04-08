import React, { Component } from 'react';
import { View, TouchableHighlight, Image, Text } from 'react-native';
import Dialog, { DialogContent, DialogFooter, DialogButton, ScaleAnimation, DialogTitle } from 'react-native-popup-dialog';
import Overlay from 'react-native-modal-overlay';
import LoginIcon from '../../../assets/header/login.png';
import WaiterIcon from '../../../assets/header/waiter.png';
import DrinkIcon from '../../../assets/header/drink.png';
import GameIcon from '../../../assets/header/joystick.png';
import CartIcon from '../../../assets/header/shopping-cart.png';
import RightArrow from '../../../assets/header/right-arrow.png';
import styles from './styles.js';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serverDialog: false,
            serverCalled: false,
            drinkOverlay: false,
            gamesOverlay: false
        }
        this.loginSuccessful = this.props.navigation.getParam('loginSuccessful');
    }

    renderLoginIcon = () => {
        return (
            <TouchableHighlight
                style = {styles.buttonBackground}
                onPress = {() => { this.props.navigation.navigate('Register') }}
            >
                <Image source = {LoginIcon}/>
            </TouchableHighlight>
        )
    }

    alertServer = () => {
        this.setState({
            serverDialog: false,
            serverCalled: true
        })
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
        let loginView;

        if (!this.loginSuccessful) {
            loginView = this.renderLoginIcon();
        }

        return (
            <View style = {styles.header}>
                {loginView}

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

export default Header;