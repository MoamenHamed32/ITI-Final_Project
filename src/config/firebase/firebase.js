import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const userCol = collection(firestore, "users");

export const productsCol = collection(firestore, "products");

export const caseCol = collection(firestore, "case");
export const mouseCol = collection(firestore, "mouse");
export const keyboardCol = collection(firestore, "keyboard");
export const hardCol = collection(firestore, "hardDesk");
export const cpuCol = collection(firestore, "cpu");
export const memoryCol = collection(firestore, "memory");
export const monitorCol = collection(firestore, "monitor");
export const motherboardCol = collection(firestore, "motherboard");
export const powerSupplyCol = collection(firestore, "powerSupply");
export const speakerCol = collection(firestore, "speaker");
