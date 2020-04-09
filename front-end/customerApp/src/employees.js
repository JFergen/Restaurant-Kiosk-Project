import firebase from '@react-native-firebase/app';
import '@react-native-firebase/functions';
import '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'


//this function will add a employee to the database
//the function takes in a object as it's parameter
//for example:
//let employee = {
    //dob: "03/23/1989",
    // hourlyRate: 15.5,
    // id: "4MfW9403U5WqT5cSIgbG",
    // name: "Tony Romo",
    // role: "waitstaff"
// }
//addEmployee(employee)
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


//this function will delete a employee from the database
//this function takes a string for the parameter which is the employeeID, for example:
//deleteEmployee("4MfW9403U5WqT5cSIgbG")
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


//this function will update the employee information
//this function takes a object as it's parameter
//for example:
//let employee = {
    //dob: "03/23/1989",
    // hourlyRate: 20.5,
    // id: "4MfW9403U5WqT5cSIgbG",
    // name: "Dak Romo",
    // role: "manager"
// }
//for the employee with the id 4MfW9403U5WqT5cSIgbG
//the employees dob will remain the same
//the hourlyRate will change to 20.5
//the id will remain the same
//the name will change to Dak Romo
//the role will change to manager
//updateEmployeeInformation(item)
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