import firebase from '@react-native-firebase/app';
import '@react-native-firebase/functions';
import '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

//function to add Menu item
//parameter is a item object.
//for example:
/*let item = {
 calories: 750,
 indgredients: ['cheese', 'tomato sauce', 'pepperoni'],
 name: 'Pizza',
 price: 6.99,
 type: 'entree',
 uri: 'image link'
 }*/
 //then pass item to the function i.e, addToMenu(item)
export async function addToMenu(item) {
    let isSuccess;

    await firebase.firestore().collection('Menu').add(item)
    .then(() => {
        isSuccess = true;
    })
    .catch((error) => {
        console.error("Error adding item to menu: ", error);
        isSuccess = false;
    });

    return isSuccess;
}

//function to delete a Menu item from the database
//paramater is a string which is the menu item name i.e., deleteFromMenu('Pizza') will delete the menu item who's name is Pizza
export async function deleteFromMenu(itemName) {
    let isSuccess;

    await firebase.firestore().collection('Menu').doc(itemName).delete()
    .then(() => {
        isSuccess = true;
    })
    .catch((error) => {
        console.error("Error deleting item from menu: ", error);
        isSuccess = false;
    });

    return isSuccess;
}

//function to update menu item infromation to the database
//parameter is a item object.
//for example:
/*let item = {
 calories: 850,
 indgredients: ['blue cheese', 'tomato sauce', 'pineapple'],
 name: 'Pizza',
 price: 7.99,
 type: 'entree',
 uri: 'image link'
 }*/
//then pass item to the function i.e, updateMenuItem(item)
//this will update the the Pizza menu item's calories to 850, 
//the ingredients array will be changed to have the values ['blue cheese', 'tomato sauce', 'pineapple']
//the name will remain the same
//the price will be changed to be 7.99
//the type will reamain entree
//the uri can be changed to whatever image link you want
export async function updateMenuItem(item) {
    let isSuccess;

    await firebase.firestore().collection('Menu').doc(item.name).update(item)
    .then(() => {
        isSuccess = true;
    })
    .catch((error) => {
        console.error("Error updating item in menu: ", error);
        isSuccess = false;
    });

    return isSuccess;
}

//function to get menu information from the database
//paramater is a string which is the menu item name i.e., getItemDetails('Pizza') will get the menu item data for the menu item who's named is Pizza
export async function getItemDetails(itemName) {
    let query;

    await firebase.firestore().collection('Menu').where('name', '==', itemName).get()
    .then((snapshot) => {
        query = snapshot.docs.map(doc => doc.data());
    })
    .catch ((error) => {
        console.log('Error getting document', error);
        query = null;
    });

    return query;
}
