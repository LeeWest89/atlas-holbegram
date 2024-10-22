import { addDoc, collection, doc, getDocs, onSnapshot, orderBy, query, Timestamp, updateDoc, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

const captions = collection(db, "caption");

const captionsQuery = query(captions);

const createdCaptionsQuery = (userId: string) => query(captions, where("createdBy", "==", userId));

export async function createCaption(caption: string, userId: string, imageUrl: string) {
  const docRef = await addDoc(captions, {
    text: caption,
    completed: false,
    createdBy: userId,
    imageUrl: imageUrl,
    createdAt: Timestamp.now(),
  });
  return (docRef.id);
};

export function getAllCaptions() {
  return (getDocs(captionsQuery).then((snapshot) => {
    const data = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    return (data);
  }));
};

// Home
export function allCaptions(callback: (captions: any[]) => void) {
  const captionsTimeQuery = query(captions, orderBy("createdAt", "desc"));

  return onSnapshot(captionsTimeQuery, (snapshot) => {
    const captions = []
    snapshot.forEach((doc) => {
      captions.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    callback(captions);
  });
};

// favorites
export function completedCaptions(userId: string, callback: (captions: any[]) => void) {
  const completedCaptionsQuery = query(captions, where("createdBy", "==", userId), where("completed", "==", true)); // Ensure we only fetch user's favorites

  return onSnapshot(completedCaptionsQuery, (snapshot) => {
    const captions = [];
    snapshot.forEach((doc) => {
      captions.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    callback(captions);
  });
}

// profile
export function createdCaptions(userId: string,callback: (captions: any[]) => void) {
  return onSnapshot(createdCaptionsQuery(userId), (snapshot) => {
    const captions = []
    snapshot.forEach((doc) => {
      captions.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    callback(captions);
  });
};

export async function updateCompleted(id: string, completed: boolean) {
  try {
    await updateDoc(doc(captions, id), {
      completed
    });
  } catch (error) {
    console.error("Error updating: ", error);
  }
}