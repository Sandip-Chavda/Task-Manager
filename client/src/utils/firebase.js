// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-e9f0f.firebaseapp.com",
  projectId: "taskmanager-e9f0f",
  storageBucket: "taskmanager-e9f0f.appspot.com",
  messagingSenderId: "504904623780",
  appId: "1:504904623780:web:66c181b2461cb8101f6831",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
