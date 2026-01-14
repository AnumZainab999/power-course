import { doc, setDoc, getDoc, collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { UserModel } from "../models/userModel";
import bcrypt from "bcryptjs"; // ✅ for password hashing

const COLLECTION_NAME = "power_courses_users";

/**
 * 🔹 Create new user securely in Firestore (password hashed)
 */
export const createUser = async (userData) => {
  if (!userData?.email || !userData?.password) {
    throw new Error("Email and password are required");
  }

  // ✅ Hash password before saving
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userData.password, salt);

  const userDoc = {
    ...UserModel,
    ...userData,
    password: hashedPassword, // ✅ Save hashed password
    createdAt: new Date().toISOString(),
  };

  const userRef = doc(db, COLLECTION_NAME, userData.email);
  await setDoc(userRef, userDoc);

  return userDoc;
};

/**
 * 🔹 Save Smart Learning School Request — same collection
 */
export const submitSchoolRequest = async (formData) => {
  try {
    const schoolDoc = {
      ...UserModel,
      ...formData,
      createdAt: new Date().toISOString(),
      type: "school_form", // identify type (optional)
    };

    const docRef = await addDoc(collection(db, COLLECTION_NAME), schoolDoc);
    return docRef.id;
  } catch (error) {
    console.error("Error saving school request:", error);
    throw new Error("Failed to save school request");
  }
};

/**
 * 🔹 Get user by email
 */
export const getUserByEmail = async (email) => {
  const ref = doc(db, COLLECTION_NAME, email);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return snap.data();
};

/**
 * 🔹 Get all Smart Learning School Requests
 */
export const getAllSchoolRequests = async () => {
  try {
    const snapshot = await getDocs(collection(db, COLLECTION_NAME));
    const schools = [];

    snapshot.forEach((doc) => {
      const data = doc.data();
      if (data.type === "school_form") {
        schools.push({ id: doc.id, ...data });
      }
    });

    return schools;
  } catch (error) {
    console.error("Error fetching school requests:", error);
    throw new Error("Failed to fetch school requests");
  }
};
