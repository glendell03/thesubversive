import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAH-smif6xTf0uTfM_QMwqXYSWXJT5gpaM",
  authDomain: "thesubversive-db.firebaseapp.com",
  databaseURL: "https://thesubversive-db.firebaseio.com",
  projectId: "thesubversive-db",
  storageBucket: "thesubversive-db.appspot.com",
  messagingSenderId: "20313014439",
  appId: "1:20313014439:web:b2f039b460314e08d45b82",
  measurementId: "G-ES10DL19CJ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccess: () => false,
  },
};
export default firebase;
