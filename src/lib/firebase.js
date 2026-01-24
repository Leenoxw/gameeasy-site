import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    rules_version = '2';

    service cloud.firestore {
        match /databases/{database}/documents {
            match /{document=**} {
                allow read, write: if false;
            }
        }
    }
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);