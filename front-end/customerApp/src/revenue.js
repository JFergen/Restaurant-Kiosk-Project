import firebase from '@react-native-firebase/app';
import '@react-native-firebase/functions';
import '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

//this function will update daily revenue
//if value not present, update() will create
//this function takes a object as it's parameter
//for example:
//let revenue = {
      // year: 2020
      // month: January
      // date: 0
export async function updateDailyRevenue(revenue) {
    let isSuccess;

    await firebase.firestore().collection('DailyRevenue').doc(revenue.year)
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
//if value not present, update() will create
//this function takes a object as it's parameter
//for example:
//let revenue = {
      // month: January
export async function updateMonthlyRevenue(revenue) {
    let isSuccess;

    await firebase.firestore().collection('MonthlyRevenue').
    .update(revenue)
    .then(() => {
        isSuccess = true;
        })
    .catch((error) => {
        console.error("Error updating Employees in database table: ", error);
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
