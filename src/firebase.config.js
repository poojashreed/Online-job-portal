// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyC4RMpdbB22SRxyXKUUePw4IMbCkV2QRaw",
  authDomain: "online-job-portal-ea6e2.firebaseapp.com",
  projectId: "online-job-portal-ea6e2",
  storageBucket: "online-job-portal-ea6e2.appspot.com",
  messagingSenderId: "729807414831",
  appId: "1:729807414831:web:b2599c536ec3986a4dc8da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };