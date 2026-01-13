import { db } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";


/**
 * Save contact message to Firestore
 * @param {Object} contactData - Contact form data
 * @returns {Promise} - Promise with document ID or error
 */
export const saveContactMessage = async (contactData) => {
  try {
    const contactsRef = collection(db, "contacts");
    const docRef = await addDoc(contactsRef, {
      ...contactData,
      createdAt: serverTimestamp(),
      status: "unread" // can be: unread, read, responded
    });
    
    return {
      success: true,
      id: docRef.id,
      message: "Message sent successfully!"
    };
  } catch (error) {
    console.error("Error saving contact message:", error);
    return {
      success: false,
      error: error.message
    };
  }
};

/**
 * Get all contact messages (for admin panel)
 */
export const getContactMessages = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "contacts"));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  }
};

/**
 * Update message status
 */
export const updateMessageStatus = async (messageId, status) => {
  try {
    const messageRef = doc(db, "contacts", messageId);
    await updateDoc(messageRef, {
      status: status,
      updatedAt: serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating message:", error);
    throw error;
  }
};