// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR57nh47YP38pGBj38jHumuWPDssN_3ao",
  authDomain: "iot-lab-ironman-hkr.firebaseapp.com",
  databaseURL: "https://iot-lab-ironman-hkr-default-rtdb.firebaseio.com",
  projectId: "iot-lab-ironman-hkr",
  storageBucket: "iot-lab-ironman-hkr.appspot.com",
  messagingSenderId: "1039841073090",
  appId: "1:1039841073090:web:d803fc89225e602003e85b",
  measurementId: "G-KV2KR4LH73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);