// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-8Jw6KtECibcje58onIBlU5an6l_s71Y",
  authDomain: "bingeflixgpt-b7755.firebaseapp.com",
  projectId: "bingeflixgpt-b7755",
  storageBucket: "bingeflixgpt-b7755.appspot.com",
  messagingSenderId: "1021297214943",
  appId: "1:1021297214943:web:0423de2d2b42f7716ab06a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
