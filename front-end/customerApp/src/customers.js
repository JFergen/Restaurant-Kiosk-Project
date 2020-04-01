import firebase from '@react-native-firebase/app';
import '@react-native-firebase/functions';
import '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

export async function addCustomer(Customer) {
    let isSuccess;

    await firebase.firestore().collection('Customers').add(Customer)
    .then(() => {
        isSuccess = true;
    })
    .catch((error) => {
        console.error("Error adding Customer to Customer table: ", error);
        isSuccess = false;
    });

    return isSuccess;
}


export async function deleteCustomer(CustomerID) {
    
    let isSuccess;

    await firebase.firestore().collection('Customers').doc(CustomerID).delete()
    .then(() => {
        isSuccess = true;
    })
    .catch((error) => {
        console.error("Error deleting customer from customer table: ", error);
        isSuccess = false;
    });

    return isSuccess;
}

export async function login(email, password) {
    let loginSuccess;
    let customer;

    await firebase.firestore().collection('Customers').where('email', '==', email).get()
    .then((snapshot) => {
        if (snapshot.empty) {
            loginSuccess = 'Invalid Email or Password';
        } 
        else {
            customer = snapshot.docs.map(doc => doc.data());
        }
    })
    .catch (error => {
        console.log('Error getting document', error);
    });
    
    if (loginSuccess == 'Invalid Email or Password') {
        if (password != customer.password) {
            return 'Invalid Email or Password';
        }
    }
    
    return customer;
}