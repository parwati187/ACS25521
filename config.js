import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDSzfSORqpMmvMHCysMJ1jUOjvqQoL49Z4",
  authDomain: "booksanta1-fa039.firebaseapp.com",
  databaseURL: "https://booksanta1-fa039.firebaseio.com",
  projectId: "booksanta1-fa039",
  storageBucket: "booksanta1-fa039.appspot.com",
  messagingSenderId: "1092448085592",
  appId: "1:1092448085592:web:7a93d4326cfddb337d0c2d"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();