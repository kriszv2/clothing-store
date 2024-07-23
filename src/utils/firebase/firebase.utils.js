import { initializeApp } from "firebase/app"
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAEj-I59Pe9lmBPERVeVSUh7Y9WXwx-CPw",
    authDomain: "clothing-store-e0537.firebaseapp.com",
    projectId: "clothing-store-e0537",
    storageBucket: "clothing-store-e0537.appspot.com",
    messagingSenderId: "558820125837",
    appId: "1:558820125837:web:8a62823ea46eb9eb8cc6c4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider()

  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

  export const db = getFirestore()

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) =>{
    if(!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid)

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()){
      const { email, displayName } = userAuth
      const createdAt = new Date()

      try{
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation
        })
      }catch (error) {
        console.log("Error creating user", error.message)
      }

    }

  }
  export const createAuthUserWithEmailAndPassword = async (email, password)=>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
  }
  export const signInAuthUserWithEmailAndPassword = async (email, password)=>{
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
  }
  export const signOutUser = async () =>{
    return await signOut(auth)
  }
  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback)