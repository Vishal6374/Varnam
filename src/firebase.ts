import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmUM1PyTTJHP8RSStQBTNcMyqoxc7wqW8",
  authDomain: "varn-9460b.firebaseapp.com",
  projectId: "varn-9460b",
  storageBucket: "varn-9460b.firebasestorage.app",
  messagingSenderId: "40197265566",
  appId: "1:40197265566:web:ccd2e4496ef26afcf5838f",
  measurementId: "G-0W6EKDWEYK"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
