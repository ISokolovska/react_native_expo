import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9QdQTwQvesHYBcSVLbgDB9KEAJCcDdqU",
  authDomain: "react-native-expo-65701.firebaseapp.com",
  projectId: "react-native-expo-65701",
  storageBucket: "react-native-expo-65701.appspot.com",
  messagingSenderId: "71685086916",
  appId: "1:71685086916:web:3b949c90f92df973c6f391",
  measurementId: "G-B0XLFNFLG8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
