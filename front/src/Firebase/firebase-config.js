import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8v267roZ3UaIPHspL0SRFm829LcG1aac",
  authDomain: "human-conet.firebaseapp.com",
  projectId: "human-conet",
  storageBucket: "human-conet.appspot.com",
  messagingSenderId: "684076489664",
  appId: "1:684076489664:web:ed669e366b914842aac625",
  measurementId: "G-YQVXMH3CS2"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)