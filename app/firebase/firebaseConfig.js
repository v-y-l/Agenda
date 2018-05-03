import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';
import config from './secureConfig';

const myFirebaseApp = firebase.initializeApp(config);
const reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp);

export default reduxSagaFirebase;