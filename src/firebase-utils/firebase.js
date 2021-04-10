import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC62dRkWXt__aQSMHrkODCQyMKEMLZ-mAQ",
  authDomain: "e-commerce-store-184e8.firebaseapp.com",
  projectId: "e-commerce-store-184e8",
  storageBucket: "e-commerce-store-184e8.appspot.com",
  messagingSenderId: "97192355945",
  appId: "1:97192355945:web:baf937c91b4cea6e5c9af8",
  measurementId: "G-75CC289MK6",
};

export const createUserProfileDocument = async ( userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log("error while creating user", error.message);
    }
  }

  return userRef;

}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;