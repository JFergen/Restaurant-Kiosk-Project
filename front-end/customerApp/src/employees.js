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
        console.error("Error adding Employee to Employees table: ", error);
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
        console.error("Error deleting Employee from Employees table: ", error);
        isSuccess = false;
    });

    return isSuccess;
}


//gets all the employees in the database
export async function getEmployees() {
    let query;

    await firebase.firestore().collection('Employees').get()
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
export async function updateEmployeeInformation(item) {
    let isSuccess;

    await firebase.firestore().collection('Employees').doc(item.id).update(item)
    .then(() => {
        isSuccess = true;
    })
    .catch((error) => {
        console.error("Error updating Employees in database table: ", error);
        isSuccess = false;
    });

    return isSuccess;

}