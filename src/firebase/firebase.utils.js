import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDil_nxxWwRPtq6dES0rcRiomMN67vpdrs",
  authDomain: "e-commerce-db-eb150.firebaseapp.com",
  databaseURL: "https://e-commerce-db-eb150.firebaseio.com",
  projectId: "e-commerce-db-eb150",
  storageBucket: "e-commerce-db-eb150.appspot.com",
  messagingSenderId: "692265592816",
  appId: "1:692265592816:web:f9dcf87ba46dd7990c9f35",
  measurementId: "G-2J990XDHFM",
};

export const createUserProfileDocument = async (userAuth, aditionalData) => {
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
        ...aditionalData,
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
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
