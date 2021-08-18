import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCaZtVtXlex7kopDP2FlMZ6oyuydykobLE",
  authDomain: "complaint-forum-8556b.firebaseapp.com",
  projectId: "complaint-forum-8556b",
  storageBucket: "complaint-forum-8556b.appspot.com",
  messagingSenderId: "527716467671",
  appId: "1:527716467671:web:91f4b55deec1f3d8adc192"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

