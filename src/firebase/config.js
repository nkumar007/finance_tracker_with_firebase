import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAl_6emm61qqosOnwvEkKw96XSGPCLxDoM",
  authDomain: "mymoney-20fe4.firebaseapp.com",
  projectId: "mymoney-20fe4",
  storageBucket: "mymoney-20fe4.appspot.com",
  messagingSenderId: "194187403128",
  appId: "1:194187403128:web:071ab39dc418a24f83728d",
};

// init app
firebase.initializeApp(firebaseConfig);

//init service
const firestore = firebase.firestore();

export default firestore;
