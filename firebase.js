// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDR-xVj_TmSmUgafQxd-r0YtJeN9FCoTVI",
    authDomain: "react-native-firebase-au-7fa23.firebaseapp.com",
    projectId: "react-native-firebase-au-7fa23",
    storageBucket: "react-native-firebase-au-7fa23.appspot.com",
    messagingSenderId: "819687526168",
    appId: "1:819687526168:web:21b9d9e38b9cc9de12986d",
    measurementId: "G-NZ0FCQKM42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth }


