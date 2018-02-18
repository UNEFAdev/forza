/* eslint-disable */
/* This is the Firebase configuration file */

import Firebase from 'firebase'

let config = {
    apiKey: "AIzaSyB2oNIcGykb3UOecjr5rt19rZvUwT6iMLM",
    authDomain: "unefa-7551b.firebaseapp.com",
    databaseURL: "https://unefa-7551b.firebaseio.com",
    projectId: "unefa-7551b",
    storageBucket: "unefa-7551b.appspot.com",
    messagingSenderId: "483490335789"
  }; 

let app = Firebase.initializeApp(config)
let db = app.database()

// create a database references
const settingsRef = db.ref('settings')
const pagesRef = db.ref('pages')
const postsRef = db.ref('posts')
const usersRef = db.ref('users')
const mediaRef = db.ref('media')

export { postsRef, usersRef, settingsRef, pagesRef, mediaRef }
