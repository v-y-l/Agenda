import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';
import apiKey from './firebaseApiKey';

const config = {
    apiKey: apiKey,
    authDomain: "ww-wn-nxj.firebaseapp.com",
    databaseURL: "https://ww-wn-nxj.firebaseio.com",
    projectId: "ww-wn-nxj",
    storageBucket: "ww-wn-nxj.appspot.com",
    messagingSenderId: "480120212392"
};

const myFirebaseApp = firebase.initializeApp(config);
const reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp);

export default reduxSagaFirebase;