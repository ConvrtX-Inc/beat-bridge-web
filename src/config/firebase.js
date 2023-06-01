import firebaseConfig from "../../config/firebase";
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC_89oUHRz1tbvl6_MklzhtQzAouj1qa2Y",
    authDomain: "beatbridge-71924.firebaseapp.com",
    projectId: "beatbridge-71924",
    storageBucket: "beatbridge-71924.appspot.com",
    messagingSenderId: "1033922139910",
    appId: "1:1033922139910:web:dd6c091141d9e4b7bbf087"
};

firebase.initializeApp(firebaseConfig);
const firebaseDb = firebase.firestore();

export default {firebaseDb,firebase};