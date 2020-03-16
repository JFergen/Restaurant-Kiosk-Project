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
        orderID = null;
    });

    return orderID;
}

export async function addItemToOrder(orderID, item) {
    let isSuccess;

    await firebase.firestore().collection('Orders').doc(orderID).update({ item })
    .then((success) => {
        isSuccess = true;
    })
    .catch((error) => {
        console.log('Error adding to order: ', error);
        isSucces = false;
    });

    return isSuccess;
}

export async function removeOrder(orderId) {
    let isSuccess;

    await firebase.firestore().collection('Orders').doc(orderID).delete()
    .then(() => {
        isSuccess = 1;
    })
    .catch((error) => {
        console.log('Error deleting order: ', error);
        isSuccess = 0;
    });

    return isSuccess;
}

export async function getEntrees() {
    let query;

    await firebase.firestore().collection('Menu').where('type', '==', 'entree').get()
    .then(snapshot => {
        query = snapshot.docs.map(doc => doc.data());
    })
    .catch (error => {
        console.log('Error getting documents', error);
        query = null;
    });

    return query;
}

export async function getDesserts() {
    let query;

    await firebase.firestore().collection('Menu').where('type', '==', 'dessert').get()
    .then(snapshot => {
        query = snapshot.docs.map(doc => doc.data());
    })
    .catch (error => {
        console.log('Error getting documents', error);
        query = null;
    });

    return query;
}

export async function getBeverages() {
    let query;

    await firebase.firestore().collection('Menu').where('type', '==', 'beverage').get()
    .then(snapshot => {
        query = snapshot.docs.map(doc => doc.data());
    })
    .catch (error => {
        console.log('Error getting documents', error);
        query = null;
    });

    return query;
}