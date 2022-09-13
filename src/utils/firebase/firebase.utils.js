import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAtGLApplc3oOQPHsaOq5d3AP2P1rx6dZA",
    authDomain: "crwn-clothing-db-b1d4e.firebaseapp.com",
    projectId: "crwn-clothing-db-b1d4e",
    storageBucket: "crwn-clothing-db-b1d4e.appspot.com",
    messagingSenderId: "763566710957",
    appId: "1:763566710957:web:ba4c4532fdfbb28b2f6624"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users' , 'userAuth.uid');
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    //if user data does not exists
if(!userSnapshot.exists()){
  const {displayName, email} = userAuth;
  const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt
    });
  } catch(error){
    console.log('error creating the user', error.message)
  }
}
    return userDocRef;

  
}