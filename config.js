import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyART9UT4rr-lwpOYhIk54GfmbhsdNm3cFg",
    authDomain: "acs-app-9e847.firebaseapp.com",
    databaseURL: "https://acs-app-9e847.firebaseio.com",
    projectId: "acs-app-9e847",
    storageBucket: "acs-app-9e847.appspot.com",
    messagingSenderId: "684427748708",
    appId: "1:684427748708:web:1e7070a6be9edaa16f0671"
  };
firebase.initializeApp(firebaseConfig);
export default firebase.firestore(); 
