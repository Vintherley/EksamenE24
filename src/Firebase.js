import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBUN7fTOANY99jX9WwYMIqokDvxHfTx7ZA",
  authDomain: "email-dc-4a625.firebaseapp.com",
  projectId: "email-dc-4a625",
  storageBucket: "email-dc-4a625.firebasestorage.app",
  messagingSenderId: "789480593973",
  appId: "1:789480593973:web:71f81c3d5c076258b5ef7c"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, collection, addDoc };
