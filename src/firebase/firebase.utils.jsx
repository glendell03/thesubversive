import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAH-smif6xTf0uTfM_QMwqXYSWXJT5gpaM",
    authDomain: "thesubversive-db.firebaseapp.com",
    databaseURL: "https://thesubversive-db.firebaseio.com",
    projectId: "thesubversive-db",
    storageBucket: "thesubversive-db.appspot.com",
    messagingSenderId: "20313014439",
    appId: "1:20313014439:web:b2f039b460314e08d45b82",
    measurementId: "G-ES10DL19CJ"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase