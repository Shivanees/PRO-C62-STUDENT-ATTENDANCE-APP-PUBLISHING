 import firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyBLTiLqWlqGCdXK5K-toIWllTWxlqlVbZk",
    authDomain: "school-attendance-app-b079a.firebaseapp.com",
    databaseURL: "https://school-attendance-app-b079a-default-rtdb.firebaseio.com",
    projectId: "school-attendance-app-b079a",
    storageBucket: "school-attendance-app-b079a.appspot.com",
    messagingSenderId: "189680856438",
    appId: "1:189680856438:web:ed3d2ba458f70d276c1e57",
    measurementId: "G-35LPJJT3RF"
  };

  //initialize your database
   firebase.initializeApp(firebaseConfig);

  export default firebase.database()
 

  