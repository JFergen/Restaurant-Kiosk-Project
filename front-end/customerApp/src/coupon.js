import firebase from '@react-native-firebase/app';
import '@react-native-firebase/functions';
import '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

export async function validateCoupont(coupondCode) {
  let validCoupon;
  let coupon;
  
  await firebase.firestore().collection('Coupons').where('code', '==', Customer.email).get()
    .then((snapshot) => {
        if (snapshot.empty) {
            validCoupon = false;
        }  
        else {
          validCoupon = true;
          coupon = snapshot.docs.map(doc => doc.data());
        }
    })
    .catch ((error) => {
        validCoupon = false;
        console.log('error validating coupon', error);
    });
    
    if (!validCoupon) {
        return false;
    }
   
    
    return coupon[0].percentOff;
}
