import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Configura tu Firebase
const firebaseConfig = {
  apiKey: "AIzaSyARJivZtVQ8IxUhQC-k7j-BXhOoPWKlsbI",
  authDomain: "mapsapp-d58d3.firebaseapp.com",
  projectId: "mapsapp-d58d3",
  storageBucket: "mapsapp-d58d3.appspot.com",
  messagingSenderId: "997109755512",
  appId: "1:997109755512:web:1ddff3a6b5914b1ae4478d",
  measurementId: "G-GFG616XBHX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };
