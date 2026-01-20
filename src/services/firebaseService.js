import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

// Function to save form data
export const saveExpertRequest = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "expertRequests"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding document: ", error);
    return false;
  }
};
