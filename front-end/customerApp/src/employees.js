import firebase from '@react-native-firebase/app';
import '@react-native-firebase/functions';
import '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

export async function addEmployee(employee) {
    let isSuccess;

    await firebase.firestore().collection('Employees').add(employee)
    .then(() => {
        isSuccess = true;
    })
    .catch((error) => {
        console.error("Error adding employee to employee table: ", error);
        isSuccess = false;
    });

    return isSuccess;
}

export async function deleteEmployee(employeeID) {
    
    let isSuccess;

    await firebase.firestore().collection('Employees').doc(employeeID).delete()
    .then(() => {
        isSuccess = true;
    })
    .catch((error) => {
        console.error("Error deleting employee from employee table: ", error);
        isSuccess = false;
    });

    return isSuccess;
}


export async function getEmployees() {
    let document=[];
    
        await firebase.firestore().collection('Employees').get()
        .then((snapshot) => {
            snapshot.forEach(doc => {
                documents[doc.id] = doc.data();
            });
        })
        .catch((error) => {
            console.error("Error getting employees from employee table: ", error);
            
        });
        
        
        
    

    return document;
}

/* export async function deleteFromMenu(itemName) {
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
 */