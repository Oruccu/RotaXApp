import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCQvI4ayuao409-isEhGaVZ0tKqhe3JzZg",
  authDomain: "rotax-24a3f.firebaseapp.com",
  projectId: "rotax-24a3f",
  storageBucket: "rotax-24a3f.firebasestorage.app",
  messagingSenderId: "1044641486457",
  appId: "1:1044641486457:web:ddfb8fe39826d32bdea6a8",
  measurementId: "G-B2WN7EBMYT"
};

let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApps()[0];
}

export const db = getFirestore(firebaseApp);
