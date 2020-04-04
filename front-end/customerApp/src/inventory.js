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

export async function updateInventory(ingredient) {
    let isSuccess;

    await firebase.firestore().collection('Inventory').doc(ingredient.IngredientName).update(ingredient)
    .then(() => {
        isSuccess = true;
    })
    .catch((error) => {
        console.error("Error updating item in menu: ", error);
        isSuccess = false;
    });

    return isSuccess;
}


export async function getIngredientQuantity(name) {
    let ingredient;

    await firebase.firestore().collection('Inventory').where('IngredientName', '==', name).get()
    .then((snapshot) => {
        ingredient = snapshot.docs.map(doc => doc.data());
    })
    .catch (error => {
        console.log('Error getting documents', error);
        ingredient = null;
    });

    if (ingredient != null) {
        return ingredient[0].IngredientQuantity;
    }

    return null;
}

//gets all the inventory in the database
export async function getInventory() {
    let query;

    await firebase.firestore().collection('Inventory').get()
    .then((snapshot) => {
        query = snapshot.docs.map(doc => doc.data());
    })
    .catch ((error) => {
        console.log('Error getting document', error);
        query = null;
    });
    
    return query;
}