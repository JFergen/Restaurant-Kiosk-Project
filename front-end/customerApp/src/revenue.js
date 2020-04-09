import firebase from '@react-native-firebase/app';
import '@react-native-firebase/functions';
import '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

//this function will add daily revenue to the database
//the function takes in a object as it's parameter
//for example:
//
//
export async function addToDailyRevenue() {
    let isSuccess;

    await firebase.firestore().collection('DailyRevenue').doc().add()
    .then(() => {
        isSuccess = true;
    })
    .catch((error) => {
        console.error("Error adding to Daily Revenue: ", error);
        isSuccess = false;
    });

    return isSuccess;
}

//this function will add monthly revenue to the database
//the function takes in a object as it's parameter
//for example:
//
//
export async function addToMonthlyRevenue() {
    let isSuccess;

    await firebase.firestore().collection('MonthlyRevenue').add()
    .then(() => {
        isSuccess = true;
    })
    .catch((error) => {
        console.error("Error adding Employee to Employees table: ", error);
        isSuccess = false;
    });

    return isSuccess;
}

//gets the daily revenue in the database
export async function getDailyRevenue() {
    let query;

    await firebase.firestore().collection('DailyRevenue').get()
    .then((snapshot) => {
        query = snapshot.docs.map(doc => doc.data());
    })
    .catch ((error) => {
        console.log('Error getting document', error);
        query = null;
    });

    return query;
}

//gets the monthly revenue in the database
export async function getMonthlyRevenue() {
    let query;

    await firebase.firestore().collection('MonthlyRevenue').get()
    .then((snapshot) => {
        query = snapshot.docs.map(doc => doc.data());
    })
    .catch ((error) => {
        console.log('Error getting document', error);
        query = null;
    });

    return query;
}

//this function will update daily revenue
//this function takes a object as it's parameter
//for example:
//let item = {
      // month: January
      // date: 0
export async function updateDailyRevenue(item) {
    let isSuccess;

    await firebase.firestore().collection('DailyRevenue').doc(item.id).update(item)
    .then(() => {
        isSuccess = true;
    })
    .catch((error) => {
        console.error("Error updating Daily Revenue: ", error);
        isSuccess = false;
    });

    return isSuccess;

}

//this function will update the monthly revenue
//this function takes a object as it's parameter
//for example:
//
export async function updateMonthlyRevenue(item) {
    let isSuccess;

    await firebase.firestore().collection('MonthlyRevenue').doc(item.id).update(item)
    .then(() => {
        isSuccess = true;
    })
    .catch((error) => {
        console.error("Error updating Employees in database table: ", error);
        isSuccess = false;
    });

    return isSuccess;

}