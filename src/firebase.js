import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCfiOr3E_9xoGvUyRYiXiAtDEXfKs6KVHQ",
    authDomain: "personal-dashboard-3a452.firebaseapp.com",
    projectId: "personal-dashboard-3a452",
    storageBucket: "personal-dashboard-3a452.appspot.com",
    messagingSenderId: "151167936641",
    appId: "1:151167936641:web:7dbde23dfbdaa272524580"
};
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

export const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

export const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

export const logout = () => {
    signOut(auth);
  };