import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDC_9ZcQfk7p3foFIK4gEAYVD3zh9W_WzI",
  authDomain: "automiraapp.firebaseapp.com",
  databaseURL: "https://automiraapp.firebaseio.com",
  projectId: "automiraapp",
  storageBucket: "automiraapp.appspot.com",
  messagingSenderId: "994183634004",
  appId: "1:994183634004:web:313b2b89553b6db589e1c1",
  measurementId: "G-KNM13E1PWN"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export default firebase;