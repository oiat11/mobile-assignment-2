import { addDoc, collection } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function writeToDB(data, collectionName = 'activities') {
    try{
    const docId = await addDoc(collection(database, collectionName), data);
    console.log('Document written with ID: ', docId.id);
    } catch(err) {
        console.error('write to db ', err);
    }
}