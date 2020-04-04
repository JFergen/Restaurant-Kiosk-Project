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
    .then((docRef) => {
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
//gets all the orders in the database
export async function getOrders() {
    let query;

    await firebase.firestore().collection('Orders').get()
    .then((snapshot) => {
        query = snapshot.docs.map(doc => doc.data());
    })
    .catch ((error) => {
        console.log('Error getting document', error);
        query = null;
    });
    
    return query;
}
//updates a specific order in the database
export async function updateOrderInformation(item) {
    let isSuccess;

    await firebase.firestore().collection('Orders').doc(item.orderID).update(item)
    .then(() => {
        isSuccess = true;
    })
    .catch((error) => {
        console.error("Error updating Order in database table: ", error);
        isSuccess = false;
    });

    return isSuccess;
}
