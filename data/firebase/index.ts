// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUdpGeVBTLIPnjt7DFq_5GK9v29zei7GA",
    authDomain: "komari-lieferung.firebaseapp.com",
    databaseURL: "https://komari-lieferung.firebaseio.com",
    projectId: "komari-lieferung",
    storageBucket: "komari-lieferung.appspot.com",
    messagingSenderId: "520088924907",
    appId: "1:520088924907:web:d4774a1647afb1372104ae",
    measurementId: "G-B14CV5TDZ1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
