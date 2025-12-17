import { initializeApp } from "firebase/app"
import  { getFirestore, Firestore, collection, addDoc, serverTimestamp,getDocs,query,orderBy,onSnapshot,doc,deleteDoc } from "firebase/firestore" 

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_APIKEY,
  authDomain: process.env.EXPO_PUBLIC_AUTHDOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECTID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID
}

const app = initializeApp(firebaseConfig)
const firestore: Firestore = getFirestore(app)

const ITEMS: string = 'items'

export { 
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    getDocs,
    query,
    orderBy,
    onSnapshot,
    ITEMS,
    doc,
    deleteDoc 
}