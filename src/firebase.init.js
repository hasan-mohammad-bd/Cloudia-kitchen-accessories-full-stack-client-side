// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDigrpkgX6F9H7tQjfRfdlJCmnetMSMjgk",
  authDomain: "manufacturer-app-dff29.firebaseapp.com",
  projectId: "manufacturer-app-dff29",
  storageBucket: "manufacturer-app-dff29.appspot.com",
  messagingSenderId: "378702944718",
  appId: "1:378702944718:web:828a423bb74f5e0286339f"
};

//**************************************************************/
//its not working if I put the firebase secret key to .env file
//**************************************************************/


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;