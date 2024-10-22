import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebaseConfig";


export async function upload(file: Blob, name: string) {
  const storageRef = ref(storage, "images/" + name);
  const result = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(result.ref);

  return (url);
};