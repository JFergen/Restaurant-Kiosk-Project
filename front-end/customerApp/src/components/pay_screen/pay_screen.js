import React, { Component } from 'react';
import { View, Text, ImageBackground, FlatList, TouchableHighlight, Image } from 'react-native';
import Dialog, { DialogContent, DialogFooter, DialogButton, ScaleAnimation, DialogTitle } from 'react-native-popup-dialog';
import Background from '../../assets/background.jpeg';
import Cancel from '../../assets/pay_screen/cancel.png';
import UnCancel from '../../assets/pay_screen/uncanceled.png';
import LeftArrow from '../../assets/header/left-arrow.png';
import PayButton from '../../assets/pay_screen/dollar.png';
import { connect } from 'react-redux';
import { callServer } from '../../callServer';
import { confirmOrder } from '../../orders';
import styles from './styles';

class PayScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numPeople: 1,
            canceled: false,
            splitBillDialog: false,
            howToPayDialog: false,
            creditCardDialog: false,
            serverCalledDialog: false,
            receitDialog: false
        };
        this.buyingItems = this.props.navigation.getParam('items');
        this.total = 0;
        this.tax = 0;
        this.totalWithTax = 0;
    }

    showCorrectX() {
        if (this.state.canceled) {
            return (
                <TouchableHighlight 
                    underlayColor = 'transparent'
                    onPress = {() => this.uncancel()}
                >
                        <Image source = {Cancel}/>
                </TouchableHighlight>
            )
        } else {
            return (
                <TouchableHighlight
                    underlayColor = 'transparent'
                    onPress = {() => this.cancel()}
                >
                        <Image source = {UnCancel}/>
                </TouchableHighlight>
            )
        }
    }

    cancel() {
        alert('This item has been canceled and will not be a part of your total cost')
        this.setState({ canceled: true })
    }

    uncancel() {
        alert('This item has been sucessfully brought back')
        this.setState({ canceled: false })
    }

    initiatePay = async () => {
        let success = await confirmOrder(this.props.orderID, this.props.customerID, global.tableNumber, this.buyingItems)

        if (success) {
            var i;

            for (i = 0; i < this.buyingItems.length; i++) {
                this.total += this.buyingItems[i].price
            }
            this.total = this.total.toFixed(2)

            this.tax = (.08)*(this.total);
            this.tax = this.tax.toFixed(2)

            this.totalWithTax = +this.total + +this.tax
            this.totalWithTax = this.totalWithTax.toFixed(2)

            this.setState({
                //splitBillDialog: true,
                //howToPayDialog: true,
                receitDialog: true
            })
        } else {
            alert("Failed to confirm the order and/or the ingredients. Try again")
        }
    }

    renderReceipt() {
        return (
            this.buyingItems.map((item, index) => 
                <Text
                    style = {styles.receiptText}
                    key = {index}
                >
                    Item {index}-{item.name}{"\t\t"}${item.price}
                </Text>
            )
        )
    }

    displayCreditCardDialog = () => {
        this.setState({
            splitBillDialog: false,
            howToPayDialog: false,
            creditCardDialog: true
        })
    }

    alertServer = async () => {
        let callServerSuc;

        callServerSuc = await callServer(global.tableNumber);

        if (callServerSuc == true) {
            this.setState({
                howToPayDialog: false,
                serverCalledDialog: true
            })
        } else {
            this.setState({ howToPayDialog: false })
            alert('Server could not be called. Try again.')
        }
    }

    dismissReciptDialog = () => {
        this.setState({ receitDialog: false })
    }

    dissmissSplitBillDialog= () => {
        this.setState({ splitBillDialog: false })
    }

    dissmissHowToPayDialog = () => {
        this.setState({ howToPayDialog: false })
    }

    dissmissCreditCardDialog = () => {
        this.setState({ creditCardDialog: false })
    }

    dismissServerCalledDialog = () => {
        this.setState({ serverCalledDialog: false })
    }

    render() {
        return (
            <ImageBackground
                source = {Background}
                style = {styles.container}
            >
                <View style = {styles.cart}>
                   <Text style = {styles.shoppingCartText}>Shopping Cart (Scrollable)</Text>

                   <FlatList
                        data = {this.buyingItems}
                        keyExtractor = {(item, index) => index.toString()}
                        renderItem = {({item}) => (
                            <View style = {styles.itemContainer}>
                                <Text style = {{fontSize: 25, color: 'black', fontWeight: 'bold'}}>{item.name} - ${item.price}</Text>

                                <Image
                                    style = {{height: 110, width: 250}}
                                    resizeMethod = 'scale'
                                    resizeMode = 'contain'
                                    source = {{uri: item.uri}}
                                />

                                <View style = {{width: 1100, height: 145, backgroundColor: 'yellow', alignSelf: 'center'}}>
                                    <Text style = {{fontSize: 20, color: 'black', fontWeight: 'bold'}}>Special Requests:</Text>
                                </View>

                                {/* <View style = {{alignContent: 'flex-end'}}>
                                    {this.showCorrectX()}
                                </View> */}
                            </View>
                        )}
                    />
                </View>
                
                <View style = {{height: 165, width: '100%', flex: 1, flexDirection: 'row'}}>
                    <TouchableHighlight
                        style = {styles.arrowBackground}
                        onPress = {() => this.props.navigation.goBack()}
                    >
                        <Image source = {LeftArrow}/>
                    </TouchableHighlight>

                    <View style = {styles.rightIcons}>
                        <TouchableHighlight
                            style = {styles.buttonBackground}
                            onPress = {() => this.initiatePay()}
                        >
                            <Image source = {PayButton}/>
                        </TouchableHighlight>
                    </View>
                </View>






                {/* Dialog Boxes Here */}
                <Dialog
                    visible = {this.state.receitDialog}
                    dialogAnimation = {new ScaleAnimation()}
                    dialogTitle = {
                        <DialogTitle title = {"Receipt: Order ID-" + global.orderID}/>
                    }
                    footer = {
                        <DialogFooter>
                            <DialogButton
                                text = "PAY"
                                onPress = {this.dissmissHowToPayDialog} 
                            />
                            <DialogButton
                                text = "COUPONS"
                                //onPress = 
                            />
                            <DialogButton
                                text = "SPLIT THE BILL"
                                onPress = {this.dissmissSplitBillDialog}
                            />
                            <DialogButton
                                text = "DISMISS"
                                onPress = {this.dissmissReciptDialog}
                            />
                        </DialogFooter>
                    }
                >
                    <DialogContent>
                        {this.renderReceipt()}

                        <Text style = {styles.receiptText}>
                            {"\n"}
                            Total:{"\t\t\t\t"}${this.total}{"\n"}
                            Tax (8%):{"\t"}${this.tax}{"\n"}
                            {"\n"}
                            Total with Tax: ${this.totalWithTax}
                        </Text>

                    </DialogContent>
                </Dialog>

                <Dialog
                    visible = {this.state.splitBillDialog}
                    dialogAnimation = {new ScaleAnimation()}
                    dialogTitle = {
                        <DialogTitle title = "Split Bill"/>
                    }
                    footer = {
                        <DialogFooter>
                            <DialogButton
                                text = "YES"
                                //onPress = 
                            />
                            <DialogButton
                                text = "NO, CONTINUE"
                                //onPress = 
                            />
                            <DialogButton
                                text = "DISMISS"
                                onPress = {this.dissmissSplitBillDialog}
                            />
                        </DialogFooter>
                    }
                >
                    <DialogContent>
                        <Text style = {{fontSize: 20, fontWeight: 'bold'}}>Would you like to split the bill?</Text>
                    </DialogContent>
                </Dialog>

                <Dialog
                    visible = {this.state.howToPayDialog}
                    dialogAnimation = {new ScaleAnimation()}
                    dialogTitle = {
                        <DialogTitle title = "Payment Method"/>
                    }
                    footer = {
                        <DialogFooter>
                            <DialogButton
                                text = "CREDIT CARD"
                                onPress = {this.displayCreditCardDialog}
                            />
                            <DialogButton
                                text = "CASH"
                                onPress = {this.alertServer}
                            />
                            <DialogButton
                                text = "DISMISS"
                                onPress = {this.dissmissHowToPayDialog}
                            />
                        </DialogFooter>
                    }
                >
                    <DialogContent>
                        <Text style = {{fontSize: 20, fontWeight: 'bold'}}>How will you be paying today?</Text>
                    </DialogContent>
                </Dialog>

                <Dialog
                    visible = {this.state.creditCardDialog}
                    dialogAnimation = {new ScaleAnimation()}
                    dialogTitle = {
                        <DialogTitle title = "Credit Card"/>
                    }
                    footer = {
                        <DialogFooter>
                            <DialogButton
                                text = "SWIPE"
                                //onPress = {this.displayCreditCardDialog}
                            />
                            <DialogButton
                                text = "DISMISS"
                                onPress = {this.dissmissCreditCardDialog}
                            />
                        </DialogFooter>
                    }
                >
                    <DialogContent>
                        <Text style = {{fontSize: 20, fontWeight: 'bold'}}>Your total is: ${this.total}</Text>
                    </DialogContent>
                </Dialog>

                <Dialog
                    visible = {this.state.serverCalledDialog}
                    dialogAnimation = {new ScaleAnimation()}
                    footer = {
                        <DialogFooter>
                            <DialogButton
                                text = "DISMISS"
                                onPress = {this.dismissServerCalledDialog}
                            />
                        </DialogFooter>
                    }
                >
                    <DialogContent>
                        <Text style = {{fontWeight: 'bold', fontSize: 25}}>A server has been called.</Text>
                    </DialogContent>
                </Dialog>
                
            </ImageBackground>
        );
    }
}

const mapStateToProps = (state) => ({
    orderID: state.ordReducer.orderID,
    customerID: state.custReducer.customerID
})

export default connect(mapStateToProps, {})(PayScreen);