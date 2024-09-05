import { nanoid } from 'nanoid';
import { storage } from '@/app/config/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export async function uploadFile(file, folder) {
  try {
    const filename = nanoid();
    const storageRef = ref(
      storage,
      `${folder}${filename}.${file.name.split('.').pop()}`,
    );
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getFile(path) {
  try {
    const fileRef = ref(storage, path);
    return getDownloadURL(fileRef);
  } catch (error) {
    throw error;
  }
}
