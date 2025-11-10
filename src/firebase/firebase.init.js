// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_Fi6_MxKL1OLv3gyHFHc5v5jlgL1Nptc",
  authDomain: "islamic-corner-f845c.firebaseapp.com",
  projectId: "islamic-corner-f845c",
  storageBucket: "islamic-corner-f845c.firebasestorage.app",
  messagingSenderId: "819415969789",
  appId: "1:819415969789:web:4ec6989ae964eca60e3394"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);