import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD89LDVRFSzfazvmJ2RbXv29356EdPk2PI",
  authDomain: "fir-chat-154b0.firebaseapp.com",
  projectId: "fir-chat-154b0",
  storageBucket: "fir-chat-154b0.appspot.com",
  messagingSenderId: "697041700982",
  appId: "1:697041700982:web:f359f08c822f65cdbbf757",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
