import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyC9Ror_HXH_sjaGljZOA5nnk_4D6KszaZU",
    authDomain: "todoapp-5a18b.firebaseapp.com",
    databaseURL: "https://todoapp-5a18b.firebaseio.com",
    projectId: "todoapp-5a18b",
    storageBucket: "todoapp-5a18b.appspot.com",
    messagingSenderId: "486882262350"
  };
  firebase.initializeApp(config);

export const database = firebase.database()
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()