/* eslint-disable */
import firebase from 'firebase'
//import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA8ZnUHk4J45AinyAm-vezjLlv8re5pWDQ",
    authDomain: "vue-fire-chat-ddf55.firebaseapp.com",
    databaseURL: "https://vue-fire-chat-ddf55.firebaseio.com",
    projectId: "vue-fire-chat-ddf55",
    storageBucket: "vue-fire-chat-ddf55.appspot.com",
    messagingSenderId: "181987150167"
  }
  const firebaseApp = firebase.initializeApp(config)
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })
  export default firebaseApp.firestore()