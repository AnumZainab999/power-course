// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// ✅ Everest (everset) Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcbhe6X6y98OXNV-Eu8R0rCYUjwLtjRqc",
  authDomain: "everest-e4434.firebaseapp.com",
  projectId: "everest-e4434",
  storageBucket: "everest-e4434.firebasestorage.app",
  messagingSenderId: "441231130090",
  appId: "1:441231130090:web:472438376129c1b0170693",
  measurementId: "G-429BZ1DE40",
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Initialize Analytics (optional – safe to remove if not needed)
export const analytics = getAnalytics(app);

// ✅ Initialize Auth
export const auth = getAuth(app);

// ✅ Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// ✅ Initialize Firestore
export const db = getFirestore(app);
