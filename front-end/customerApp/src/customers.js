import firebase from '@react-native-firebase/app';
import '@react-native-firebase/functions';
import '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

export function addCustomer(Customer) {
    let autoID = firebase.firestore().collection('Customers').doc().id;

    Customer.id = autoID;

    firebase.firestore().collection('Customers').doc(autoID).set(Customer)
    .then(() => {
        console.log("Customer added Successfully");
    })
    .catch((error) => {
        console.error("Error adding Customer to Customer table: ", error);
    });
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
    let validEmail = true;
    let customer;

    await firebase.firestore().collection('Customers').where('email', '==', email).get()
    .then((snapshot) => {
        if (snapshot.empty) {
            validEmail = false;
        } 
        else {
            customer = snapshot.docs.map(doc => doc.data());
        }
    })
    .catch (error => {
        console.log('Error getting document', error);
    });
    
    if (validEmail) {
        if (password != customer.password) {
            return 'Invalid Email or Password';
        }
    }
    else {
        return 'Invalid Email or Password';
    }
    
    return customer;
}

//gets all the customers in the database
export async function getCustomers() {
    let query;

    await firebase.firestore().collection('Customers').get()
    .then((snapshot) => {
        query = snapshot.docs.map(doc => doc.data());
    })
    .catch ((error) => {
        console.log('Error getting document', error);
        query = null;
    });
    
    return query;
}
//need to test
export async function updateCustomerInformation(item) {
    let isSuccess;

    await firebase.firestore().collection('Customers').doc(item.id).update(item)
    .then(() => {
        isSuccess = true;
    })
    .catch((error) => {
        console.error("Error updating Order in database table: ", error);
        isSuccess = false;
    });

    return isSuccess;

}