import firebase from '@react-native-firebase/app';
import '@react-native-firebase/functions';
import '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

// function to add inventory item
export async function addToInventory(item) {
    let isSuccess;

    await firebase.firestore().collection('Inventory').add(item)
    .then(() => {
        isSuccess = true;
    })
    .catch((error) => {
        console.error("Error adding item to inventory: ", error);
        isSuccess = false;
    });

    return isSuccess;
}

// function to delete inventory item
export async function deleteFromInventory(itemName) {
    let isSuccess;

    await firebase.firestore().collection('Inventory').doc(itemName).delete()
    .then(() => {
        isSuccess = true;
    })
    .catch((error) => {
        console.error("Error deleting item from inventory: ", error);
        isSuccess = false;
    });

    return isSuccess;
}

//function to view inventory item details
export async function getItemDetails(itemName) {
    let query;

    await firebase.firestore().collection('Inventory').where('name', '==', itemName).get()
    .then((snapshot) => {
        query = snapshot.docs.map(doc => doc.data());
    })
    .catch ((error) => {
        console.log('Error getting document', error);
        query = null;
    });

    return query;
}
