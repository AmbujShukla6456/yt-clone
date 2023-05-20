import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTAoMBsp_7FL70jJmpYvLs3ytID1T5zsU",
  authDomain: "yt-clone-edc91.firebaseapp.com",
  projectId: "yt-clone-edc91",
  storageBucket: "yt-clone-edc91.appspot.com",
  messagingSenderId: "406266762964",
  appId: "1:406266762964:web:1973fb6ad21a092a644d41"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;