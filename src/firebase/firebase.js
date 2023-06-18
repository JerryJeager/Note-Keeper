import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider,  getAuth, signInWithRedirect } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC3YpNunTVyc49vNNnjnlTraUMevZnKy_k",
  authDomain: "note-keeper-389705.firebaseapp.com",
  projectId: "note-keeper-389705",
  storageBucket: "note-keeper-389705.appspot.com",
  messagingSenderId: "134566637399",
  appId: "1:134566637399:web:8c064895e79fb89b0b5812",
  measurementId: "G-6CZBFESZM4"
};

export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);




