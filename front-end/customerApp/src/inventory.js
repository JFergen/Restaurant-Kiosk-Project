import firebase from '@react-native-firebase/app';
import '@react-native-firebase/functions';
import '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

// function to add inventory item
export async function addToInventory(ingredient) {
    let isSuccess;

    await firebase.firestore().collection('Inventory').add(ingredient)
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

    await firebase.firestore().collection('Inventory').doc(IngredientName).delete()
    .then(() => {
        isSuccess = true;
    })
    .catch((error) => {
        console.error("Error deleting item from inventory: ", error);
        isSuccess = false;
    });

    return isSuccess;
}
