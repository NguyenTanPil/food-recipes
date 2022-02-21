import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAHC5mTcSqW-bphlqGfuKfhR1oinYQtpRM',
  authDomain: 'food-recipes-8120f.firebaseapp.com',
  projectId: 'food-recipes-8120f',
  storageBucket: 'food-recipes-8120f.appspot.com',
  messagingSenderId: '1035209455452',
  appId: '1:1035209455452:web:0218ada7e51eb9e731b399',
  measurementId: 'G-PGSH839JKF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const provider = new GoogleAuthProvider();
const auth = getAuth();
const storage = getStorage(app);

export { auth, provider, storage };

export default db;
