import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-iA9NcUIq3QtbAIyj1Xsk3M1ItQKKNI8",
  authDomain: "eventos-d4a5b.firebaseapp.com",
  projectId: "eventos-d4a5b",
  storageBucket: "eventos-d4a5b.appspot.com",
  messagingSenderId: "700979006506",
  appId: "1:700979006506:web:23f1ba369dc1da3bbe4753",
  measurementId: "G-939G5QL93L"
};

// Initialize Firebase

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore();

export { db, auth };
