import firebase from '@react-native-firebase/app';
import '@react-native-firebase/functions';
import '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

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
