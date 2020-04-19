import React, { Component } from 'react';
import { View, Text, ImageBackground, FlatList, TouchableHighlight, Image, TextInput } from 'react-native';
import { Button } from 'react-native-elements'
import Dialog, { DialogContent, DialogFooter, DialogButton, ScaleAnimation, DialogTitle } from 'react-native-popup-dialog';
import Background from '../../assets/background.jpeg';
//import Cancel from '../../assets/pay_screen/cancel.png';
//import UnCancel from '../../assets/pay_screen/uncanceled.png';
import LeftArrow from '../../assets/header/left-arrow.png';
import PayButton from '../../assets/pay_screen/dollar.png';
import { connect } from 'react-redux';
import { callServer } from '../../callServer';
import { confirmOrder } from '../../orders';
import { validateCoupon } from '../../coupon';
import styles from './styles';

class PayScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //canceled: false,
            tenPercentPressed: false,
            fifteenPercentPressed: false,
            twentyPercentPressed: true,
            customPressed: false,
            couponDialog: false,
            couponSuccessDialog: false,
            splitBillDialog: false,
            howToPayDialog: false,
            creditCardDialog: false,
            serverCalledDialog: false,
            receiptDialog: false
        };
        this.buyingItems = this.props.navigation.getParam('items');
        this.tipPercent = '20%'
        this.tipAmount = null
        this.numPeople = 1;
        this.total = 0;
        this.tax = 0;
        this.totalWithTax = 0;
        this.couponCode = null;
        this.percentOff = 0;
        this.totalWithTip = 0;
        this.waitStaffID = null;
        //this.blackText = styles.blackText
    }

    // displayIngredients() {
    //     return (
    //         this.buyingItems.map((item, index) => 
    //         <TouchableHighlight 
    //             underlayColor = 'transparent'
    //             onPress = {() => this.uncancel()}
    //         >
    //                             <Image source = {Cancel}/>
    //                     </TouchableHighlight>
    //         )
    //     )
    // }

    // showCorrectX() {
    //     if (this.state.canceled) {
    //         return (
    //             <TouchableHighlight 
    //                 underlayColor = 'transparent'
    //                 onPress = {() => this.uncancel()}
    //             >
    //                     <Image source = {Cancel}/>
    //             </TouchableHighlight>
    //         )
    //     } else {
    //         return (
    //             <TouchableHighlight
    //                 underlayColor = 'transparent'
    //                 onPress = {() => this.cancel()}
    //             >
    //                     <Image source = {UnCancel}/>
    //             </TouchableHighlight>
    //         )
    //     }
    // }

    // cancel() {
    //     alert('This item has been canceled and will not be a part of your total cost')
    //     this.setState({ canceled: true })
    // }

    // uncancel() {
    //     alert('This item has been sucessfully brought back')
    //     this.setState({ canceled: false })
    // }

    updateRequests = index => text => {
        this.buyingItems[index].requests = text
    }

    pressTenPercent = () => {
        this.setState({
            fifteenPercentPressed: false,
            twentyPercentPressed: false,
            customPressed: false,
            tenPercentPressed: true
        }),

        this.tipPercent = '10%'
    }

    pressFifteenPercent = () => {
        this.setState({
            fifteenPercentPressed: true,
            twentyPercentPressed: false,
            customPressed: false,
            tenPercentPressed: false
        }),

        this.tipPercent = '15%'
    }

    pressTwentyPercent = () => {
        this.setState({
            twentyPercentPressed: true,
            fifteenPercentPressed: false,
            customPressed: false,
            tenPercentPressed: false
        })

        this.tipPercent = '20%'
    }

    updateTip = text => {
        this.setState({
            tenPercentPressed: false,
            fifteenPercentPressed: false,
            twentyPercentPressed: false,
            customPressed: true
        })

        this.tipAmount = text 
    }

    updateCouponCode = (text) => { this.couponCode = text }

    updateNumPeople = (text) => {
        let people = parseInt(text, 10)
        
        if (people < 1) {
            alert("Number of people can not go below 1")
        } else {
            this.numPeople = people
        }
    }

    tryCouponCode = async (couponCode) => {
        let success = await validateCoupon(couponCode)

        if (success === false) {
            alert("Code: \"" + couponCode + "\" was invalid")
        } else {
            this.percentOff = success;

            this.setState({
                couponDialog: false,
                couponSuccessDialog: true
            })
        }
    }

    initiatePay = async () => {
        let success = await confirmOrder(this.props.orderID, this.props.customerID, global.tableNumber, this.buyingItems)

        console.log(this.buyingItems)

        if (success != false) {
            var i;
            this.total = 0
            this.waitStaffID = success

            for (i = 0; i < this.buyingItems.length; i++) {
                this.total += this.buyingItems[i].price
            }
            this.total = this.total.toFixed(2)

            this.tax = (.08)*(this.total);
            this.tax = this.tax.toFixed(2)

            this.totalWithTax = +this.total + +this.tax
            this.totalWithTax = this.totalWithTax.toFixed(2)

            this.setState({ receiptDialog: true })
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
                    Item {index}-{item.name}{"\t\t\t"}${item.price}
                </Text>
            )
        )
    }

    renderCoupon() {
        if (this.percentOff === 0) {
            return (
                <Text style = {styles.receiptText}>Total with Tax: ${this.totalWithTax}</Text>
            )
        } else {
            this.totalWithTax = (this.total)*(parseFloat(this.percentOff) / 100.0) + +(.08)*(this.total)
            this.totalWithTax = this.totalWithTax.toFixed(2)

            return (
                <Text style = {styles.receiptText}>
                    Coupons: {this.percentOff}% from coupon code: "{this.couponCode}"
                    {"\n\n"}
                    New total: ${this.totalWithTax}
                </Text>
            )
        }
    }

    renderSplit() {
        if (this.numPeople === 1) {
            return (
                null
            )
        } else {
            return (
                <Text styles = {styles.receiptText}>
                    {/* {"\n"} */}
                    Number of ways to split check: {this.numPeople}{"\n"}
                    New total: ${(this.totalWithTip / this.numPeople).toFixed(2)} each
                </Text>
            )
        }
    }

    renderTipButtons() {
        return (
            <View>
                <View style = {{flexDirection: 'row'}}>
                    <Text style = {styles.receiptText}>Tip amount:{"\t"}</Text>

                    <Button
                        buttonStyle = {[
                            styles.notPressed,
                            this.state.tenPercentPressed ? {backgroundColor: 'black'} : {}
                        ]}
                        title = '10%'
                        titleStyle = {{color: 'blue'}}
                        onPress = {() => this.pressTenPercent()}
                    />

                    <Button
                        buttonStyle = {[
                            styles.notPressed,
                            this.state.fifteenPercentPressed ? {backgroundColor: 'black'} : {}
                        ]}
                        title = '15%'
                        titleStyle = {{color: 'blue'}}
                        onPress = {() => this.pressFifteenPercent()}
                    />

                    <Button
                        buttonStyle = {[
                            styles.notPressed,
                            this.state.twentyPercentPressed ? {backgroundColor: 'black'} : {}
                        ]}
                        title = '20%'
                        titleStyle = {{color: 'blue'}}
                        onPress = {() => this.pressTwentyPercent()}
                    />

                    <View style = {[
                        styles.notPressed,
                        this.state.customPressed ? {backgroundColor: 'black'} : {}
                    ]}>
                        <TextInput
                            style = {{fontSize: 15, color: 'blue', lineHeight: 15}}
                            placeholder = "Custom $ amount"
                            onChangeText = {this.updateTip}
                        />
                    </View>
                </View>
            
                {this.renderTotalWithTip()}
            </View>
        )
    }

    renderTotalWithTip = () => {
        if (!this.state.customPressed) {
            this.tipAmount = (this.totalWithTax * (parseFloat(this.tipPercent) / 100)).toFixed(2)
            this.totalWithTip = (+this.totalWithTax + +this.tipAmount).toFixed(2)
        } else {
            this.tipAmount = (parseFloat(this.tipAmount)).toFixed(2)
            this.totalWithTip = (+this.totalWithTax + +this.tipAmount).toFixed(2)
        }

        return (
            <Text style = {styles.receiptText}>Tip amount: ${this.tipAmount}{"\n"}
                New total with tip: ${this.totalWithTip}
            </Text>
        )
    }

    displayCouponDialog = () => {
        this.setState({
            receiptDialog: false,
            couponDialog: true
        })
    }

    displayHowToPayDialog = () => {
        var i;

        for(i = 0; i < this.numPeople; i++) {
            if (i === 0) {
                this.setState({ receiptDialog: false })
                
                this.setState({ howToPayDialog: true })
            } else {
                this.setState({ howToPayDialog: false })

                this.setState({ howToPayDialog: true })
            }
        }
    }

    displayCreditCardDialog = () => {
        this.setState({
            splitBillDialog: false,
            howToPayDialog: false,
            creditCardDialog: true
        })
    }

    displaySplitBillDialog = () => {
        this.setState({
            receiptDialog: false,
            splitBillDialog: true
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

    dismissReceiptDialog = () => {
        this.setState({ receiptDialog: false })
    }

    dismissCouponDialog = () => {
        this.setState({ 
            couponDialog: false,
            receiptDialog: true 
        })
    }

    dismissCouponSuccessDialog = () => {
        this.setState({
            couponSuccessDialog: false,
            receiptDialog: true
        })
    }

    backToReceiptDialog = () => {
        this.setState({
            splitBillDialog: false,
            receiptDialog: true
        })
    }

    dismissSplitBillDialog = () => {
        this.setState({ splitBillDialog: false })
    }

    dismissHowToPayDialog = () => {
        this.setState({ howToPayDialog: false })
    }

    dismissCreditCardDialog = () => {
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
                        renderItem = {({item, index}) => (
                            <View style = {styles.itemContainer}>
                                <Text style = {{fontSize: 25, color: 'black', fontWeight: 'bold'}}>{item.name} - ${item.price}</Text>

                                <Image
                                    style = {{height: 110, width: 250}}
                                    resizeMethod = 'scale'
                                    resizeMode = 'contain'
                                    source = {{uri: item.uri}}
                                />

                                {/* <View style = {{width: 400, height: 147, backgroundColor: 'white', borderWidth: 2, borderColor: 'black'}}>
                                    <Text style = {{fontSize: 20, color: 'black', fontWeight: 'bold'}}>Ingredients: (Click any you do not want)</Text>

                                    {this.displayIngredients}
                                </View> */}

                                <View style = {{width: 1100, height: 147, backgroundColor: 'yellow', alignSelf: 'center', borderWidth: 2, borderColor: 'black', marginLeft: 10}}>
                                    <TextInput 
                                        style = {{fontSize: 20, color: 'black', fontWeight: 'bold', lineHeight: 20}}
                                        multiline = {true}
                                        placeholder = "Special Requests (or ingredients to add)"
                                        onChangeText = {this.updateRequests(index)}
                                    />
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
                    visible = {this.state.receiptDialog}
                    dialogAnimation = {new ScaleAnimation()}
                    dialogTitle = {
                        <DialogTitle title = {"Receipt: Order ID-" + global.orderID}/>
                    }
                    footer = {
                        <DialogFooter>
                            <DialogButton
                                text = "PAY"
                                onPress = {this.displayHowToPayDialog} 
                            />
                            <DialogButton
                                text = "COUPONS"
                                onPress = {this.displayCouponDialog}
                            />
                            <DialogButton
                                text = "SPLIT THE BILL"
                                onPress = {this.displaySplitBillDialog}
                            />
                            <DialogButton
                                text = "DISMISS"
                                onPress = {this.dismissReceiptDialog}
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
                        </Text>

                        {this.renderCoupon()}

                        {this.renderSplit()}

                        {this.renderTipButtons()}

                    </DialogContent>
                </Dialog>

                <Dialog
                    visible = {this.state.couponDialog}
                    dialogAnimation = {new ScaleAnimation()}
                    dialogTitle = {
                        <DialogTitle title = "Coupons"/>
                    }
                    footer = {
                        <DialogFooter>
                            <DialogButton
                                text = "TRY CODE"
                                onPress = {() => this.tryCouponCode(this.couponCode)} 
                            />
                            <DialogButton
                                text = "DISMISS"
                                onPress = {this.dismissCouponDialog}
                            />
                        </DialogFooter>
                    }
                >
                    <DialogContent>
                        <Text style = {styles.receiptText}>Try coupon code: </Text>

                        <TextInput style = {styles.receiptText}
                            style = {{fontSize: 20, color: 'black', fontWeight: 'bold', lineHeight: 20}}
                            placeholder = "Input coupon code"
                            onChangeText = {this.updateCouponCode}
                        />

                    </DialogContent>
                </Dialog>

                <Dialog
                    visible = {this.state.couponSuccessDialog}
                    dialogAnimation = {new ScaleAnimation()}
                    dialogTitle = {
                        <DialogTitle title = "Success!"/>
                    }
                    footer = {
                        <DialogFooter>
                            <DialogButton
                                text = "BACK TO RECEIPT"
                                onPress = {this.dismissCouponSuccessDialog}
                            />
                        </DialogFooter>
                    }
                >
                    <DialogContent>
                        <Text style = {styles.receiptText}>Success! {this.percentOff}% off of your meal</Text>
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
                                text = "CONTINUE"
                                onPress = {this.backToReceiptDialog} 
                            />
                            <DialogButton
                                text = "DISMISS"
                                onPress = {this.dismissSplitBillDialog}
                            />
                        </DialogFooter>
                    }
                >
                    <DialogContent>
                        <Text style = {styles.receiptText}>How many ways do you want to split the check?</Text>
                            <TextInput style = {styles.receiptText}
                                style = {{fontSize: 20, color: 'black', fontWeight: 'bold', lineHeight: 20}}
                                placeholder = "1"
                                onChangeText = {this.updateNumPeople}
                            />
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
                                onPress = {this.dismissHowToPayDialog}
                            />
                        </DialogFooter>
                    }
                >
                    <DialogContent>
                        <Text style = {{fontSize: 20, fontWeight: 'bold'}}>
                            How will you be paying today?
                            Your total is ${(this.totalWithTip / this.numPeople).toFixed(2)}
                        </Text>
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
                                //onPress = {this.displayCreditCardDialog} (make this work with backend)
                            />
                            <DialogButton
                                text = "DISMISS"
                                onPress = {this.dismissCreditCardDialog}
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