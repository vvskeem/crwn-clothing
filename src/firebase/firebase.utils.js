import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDhhSdOhbNbYJjN5muyOEiXrZFKqJ61OME",
  authDomain: "crwn-db-e6be2.firebaseapp.com",
  databaseURL: "https://crwn-db-e6be2.firebaseio.com",
  projectId: "crwn-db-e6be2",
  storageBucket: "crwn-db-e6be2.appspot.com",
  messagingSenderId: "285102366450",
  appId: "1:285102366450:web:21268be5c3ef2aed86ba6b",
  measurementId: "G-ZPCCV996CZ",
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

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
