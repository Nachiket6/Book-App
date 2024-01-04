// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3Mdv_qJ70TIELXS1qOA-5S5mNmMNp--8",
  authDomain: "book-store-130e2.firebaseapp.com",
  projectId: "book-store-130e2",
  storageBucket: "book-store-130e2.appspot.com",
  messagingSenderId: "1098793429356",
  appId: "1:1098793429356:web:0fb815a617965016a82b49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;