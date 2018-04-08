/* eslint-disable */
/* This is the Firebase configuration file */

import Firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAEEiv4EBneXtR4-e_dcHChi0pxzuJk8-Y",
  authDomain: "unefa-site.firebaseapp.com",
  databaseURL: "https://unefa-site.firebaseio.com",
  projectId: "unefa-site",
  storageBucket: "unefa-site.appspot.com",
  messagingSenderId: "781577979038"
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
