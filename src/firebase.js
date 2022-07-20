import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"

//Firebase setup
const firebaseConfig = {
    apiKey: "AIzaSyA0I64fFOlAdPOyciJPlAtoSbDnxBn8bLA",
    authDomain: "hamro-dd-assignment.firebaseapp.com",
    projectId: "hamro-dd-assignment",
    storageBucket: "hamro-dd-assignment.appspot.com",
    messagingSenderId: "123487748692",
    appId: "1:123487748692:web:51bf1d72d6e94da1d0e3c1",
    measurementId: "G-KHX0LT7LEP"
  };

const app = initializeApp(firebaseConfig)
const auth  = getAuth(app)

export {auth}