import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNOVmT4y1rpJo2oWfAthVUHk5fW_ESJTI",
  authDomain: "card-tapper-database.firebaseapp.com",
  projectId: "card-tapper-database",
  storageBucket: "card-tapper-database.appspot.com",
  messagingSenderId: "763534249879",
  appId: "1:763534249879:web:c9c384c9c4224aa9247ed2",
  measurementId: "G-BBLWTDC7Z6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);