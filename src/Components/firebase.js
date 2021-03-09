import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyB8TfxQ37xe_jB0LAYqBon89d_qB-ZYX1Q",
  authDomain: "insta-facc6.firebaseapp.com",
  projectId: "insta-facc6",
  storageBucket: "insta-facc6.appspot.com",
  messagingSenderId: "853693250724",
  appId: "1:853693250724:web:f541bcc65d07221b5fba31"
});

const auth=firebase.auth();
const storage=firebase.storage();

export {storage,auth};
