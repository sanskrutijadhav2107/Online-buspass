
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBCd-LW_ALv-3_sxVqCutjPnioIdQtw4yM",
  authDomain: "onlinebuspassproject.firebaseapp.com",
  projectId: "onlinebuspassproject",
  storageBucket: "onlinebuspassproject.firebasestorage.app",
  messagingSenderId: "176405853556",
  appId: "1:176405853556:web:3471979bcf25e6289e2821",
  measurementId: "G-J0G030Z5M0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export initialized services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app); // ✅ This was missing earlier

export default app;
