import firebase from '@react-native-firebase/app';
import '@react-native-firebase/functions';
import '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

/*  example?:
    let transaction = {
        amountDue = 15.00,
        discount = 0.0,
        orderTotal = 11.00,
        paymentMethod = "Credit Card",
        tips = 4.00,
        waitstaff = "4MfW9403U5WqT5cSIgbG"
    };*/
export async function addTransaction(transaction) {
    let isSuccess;
    let errorMessage;
  
    await firebase.firestore().collection('Transactions').add(transaction)
    .then(() => {
        console.log("Successfully added transaction.");
        isSuccess = true;
    })
    .catch((error) => {
        alert("Error adding table to table doc: ", error);
        isSuccess = false;
        errorMessage = error;
    });
  
    if (!isSuccess) {
      return errorMessage;
    }
  
     return true;
}
