import { addDoc, collection } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function writeToDB(data, collectionName) {
    try{
    const docId = await addDoc(collection(database, collectionName), data);
    console.log('Document written with ID: ', docId.id);
    } catch(err) {
        console.error('write to db ', err);
    }
}

export const updateInDB = async (data, collectionName, docId) => {
    try {
      const docRef = doc(database, collectionName, docId);
      await updateDoc(docRef, data);
      console.log("Document updated with ID: ", docId);
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  }