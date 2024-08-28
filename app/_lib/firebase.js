// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDslU-gQl89AZUUNFPJS-6qwuTJFSmaNrg',
  authDomain: 'home-quest-1b2b2.firebaseapp.com',
  projectId: 'home-quest-1b2b2',
  storageBucket: 'home-quest-1b2b2.appspot.com',
  messagingSenderId: '416487041541',
  appId: '1:416487041541:web:d6f630db231df581c64a6c',
  measurementId: 'G-RDNWEWGZTG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
