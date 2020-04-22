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
    
   let dailyRev;
    
    await firebase.firestore().collection('DailyRevenue').where('year', '==', '2020).get()
    .then((snapshot) => {
        console.log("Successfully retreived daily revenue");
        isSuccess = true;
        dailyRev = snapshot.docs.map(doc => doc.data());
    })
    .catch((error) => {
        alert("Error retreiving daily revenue ", error);
        isSuccess = false;
        errorMessage = error;
    });
  
    dailyRev = dailyRev[0].April[21];
    dailyRev += parseFloat(transaction.orderTotal);
        
    let arr = Array.apply(0, Array(21)).map(function () {});
    arr[21] = dailyRev;
        
     await firebase.firestore().collection('DailyRevenue').doc('2020').set({April: dailyRev} )
    .then(() => {
        console.log("Employee added Successfully");
        isSuccess = true;
    })
    .catch((error) => {
        console.error("Error adding Employee to Employee table: ", error);
        isSuccess = false;
    });
    
    
        
    if (!isSuccess) {
      return errorMessage;
    }
    
    
  
     return true;
}
