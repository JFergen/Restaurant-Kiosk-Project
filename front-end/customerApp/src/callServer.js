import firebase from '@react-native-firebase/app';
import '@react-native-firebase/functions';
import '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

export async function login(email, password) {
    let validEmail = true;
    let customer;

    await firebase.firestore().collection('callServer').where('email', '==', email).get()
    .then((snapshot) => {
        
    })
    .catch (error => {
        console.log('Error calling server', error);
    });
}
