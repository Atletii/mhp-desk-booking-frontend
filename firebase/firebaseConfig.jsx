import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDqQU-quZVDSET_a40tvQqPtk2g0f-l_Eo",
    authDomain: "mhpproject-5d777.firebaseapp.com",
    projectId: "mhpproject-5d777",
    storageBucket: "mhpproject-5d777.appspot.com",
    messagingSenderId: "485293257057",
    appId: "1:485293257057:web:2d2074e008324a30ba9520"
};


const app = initializeApp(firebaseConfig);
export const database = getAuth(app);