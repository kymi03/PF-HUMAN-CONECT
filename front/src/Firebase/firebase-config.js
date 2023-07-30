import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8v267roZ3UaIPHspL0SRFm829LcG1aac",
  authDomain: "human-conet.firebaseapp.com",
  projectId: "human-conet",
  storageBucket: "human-conet.appspot.com",
  messagingSenderId: "684076489664",
  appId: "1:684076489664:web:ed669e366b914842aac625",
  measurementId: "G-YQVXMH3CS2",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
