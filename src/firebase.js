import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "szybkauprawa-f5ed8.firebaseapp.com",
  projectId: "szybkauprawa-f5ed8",
  storageBucket: "szybkauprawa-f5ed8.appspot.com",
  messagingSenderId: "130797102772",
  appId: "1:130797102772:web:8adeb543a9c80d1f6c99e1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
