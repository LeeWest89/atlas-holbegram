import { addDoc, collection, doc, getDocs, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

const captions = collection(db, "caption");

const captionsQuery = query(captions);

const completedCaptionsQuery = query(captions, where("completed", "==", true));

const createdCaptionsQuery = (userId: string) => query(captions, where("createdBy", "==", userId));

export function createCaption(caption: string, userId: string, imageUrl: string) {
  return (addDoc(captions, {
    text: caption,
    completed: false,
    createdBy: userId,
    imageUrl: imageUrl,
  }));
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
  return onSnapshot(captionsQuery, (snapshot) => {
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
export function completedCaptions(callback: (captions: any[]) => void) {
  return onSnapshot(completedCaptionsQuery, (snapshot) => {
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

export function updateCompleted(id: string, completed:boolean) {
  return (updateDoc(doc(captions, id), {
    completed
  }));
};