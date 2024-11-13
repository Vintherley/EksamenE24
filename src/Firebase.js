import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCemhT4xEK0QS8jMkin92Ag4hTX9QHVq_8",
    authDomain: "email-dc.firebaseapp.com",
    projectId: "email-dc",
    storageBucket: "email-dc.firebasestorage.app",
    messagingSenderId: "738427485051",
    appId: "1:738427485051:web:26b83fb216bc6b1941dbde"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, collection, addDoc };
