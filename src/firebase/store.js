import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyAxmexStggLwTctDJ2_mvvaZcyVKqO5Kgg",
    authDomain: "vue-tech-blog-71521.firebaseapp.com",
    projectId: "vue-tech-blog-71521",
    storageBucket: "vue-tech-blog-71521.appspot.com",
    messagingSenderId: "313025684288",
    appId: "1:313025684288:web:4040307de8974b7a9210a5"
};

//initialize firebase app

firebase.initializeApp(firebaseConfig);

//initialize firestore service

const projectFireStore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFireStore, timestamp }

