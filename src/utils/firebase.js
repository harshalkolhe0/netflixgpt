// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcjDckyL7aebgnSIKYmNp7kkFwW94guSw",
    authDomain: "netflix-803da.firebaseapp.com",
    projectId: "netflix-803da",
    storageBucket: "netflix-803da.appspot.com",
    messagingSenderId: "796385924979",
    appId: "1:796385924979:web:c6dd2c2a84320a809e1706",
    measurementId: "G-913B1K2R0L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
