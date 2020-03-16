import firebase from '@react-native-firebase/app';
import '@react-native-firebase/functions';
import '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'


export async function createOrder(customerID) {
    let orderID;

    await firebase.firestore().collection('Orders').add({
        customerID: customerID,
        order: null,
    })
    .then(function(docRef) {
        orderID = docRef.id;
    })
    .catch(function(error) {
        console.error("Error creating Order: ", error);
        orderID = 'FAILURE';
    });

    return orderID;
}

export async function addItemToOrder(orderID, items) {
    let success;

    await firebase.firestore().collection('Orders').doc(orderID).update({ items })
    .then((success) => {
        success = 1;
    })
    .catch((error) => {
        console.log('Error adding to order: ', error);
        success = 0;
    });

    return success;
}

export async function removeOrder(orderId) {
    let success;

    await firebase.firestore().collection('Orders').doc(orderID).delete()
    .then((success) => {
        success = 1;
    })
    .catch((error) => {
        console.log('Error deleting order: ', error);
        success = 0;
    });

    return success;
}

export async function updateOrder(orderID, item) {

}

export async function finalizeOrder(orderID) {

}