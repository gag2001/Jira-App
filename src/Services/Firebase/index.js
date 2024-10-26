import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'; 



const firebaseConfig = {
    apiKey: "AIzaSyCbP86OwyQJ9OWVmA8Xya0dQHJQv5w5Peg",
    authDomain: "jira-e7806.firebaseapp.com",
    databaseURL: "https://jira-e7806-default-rtdb.firebaseio.com",
    projectId: "jira-e7806",
    storageBucket: "jira-e7806.appspot.com",
    messagingSenderId: "641052994919",
    appId: "1:641052994919:web:496db9d79ffef99f6513c2",
    measurementId: "G-VMJZSTQW4D"
  };


 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 const auth = getAuth(app);



export{
  db,
  auth
};
