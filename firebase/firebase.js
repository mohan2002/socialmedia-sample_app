// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO2vMOoJYn22Bm1QPItyAnkz48wty8VlI",
  authDomain: "socialmedia-72d82.firebaseapp.com",
  projectId: "socialmedia-72d82",
  storageBucket: "socialmedia-72d82.appspot.com",
  messagingSenderId: "173254876070",
  appId: "1:173254876070:web:013050babdde4dc8ce0d67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
