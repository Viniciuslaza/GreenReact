/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable object-shorthand */

import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, db, storage } from "./firebase";

export const createUser = (email, password, payload) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      addDoc(collection(db, "Users"), {
        ...payload,
        id: user.uid,
      });
    })
    .catch((err) => err.message);

export const getUserById = async (userId) => {
  const q = query(collection(db, "Users"), where("id", "==", userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnap) => ({
    ...docSnap.data(),
    id: docSnap.id,
  }));
};

export const getProjects = () =>
  getDocs(collection(db, "Projects")).then((querySnapshot) =>
    querySnapshot.docs.map((doc) => ({
      id: doc.id, // Adiciona o ID do documento ao objeto retornado
      ...doc.data(),
    }))
  );

export const deleteProject = (projectId) =>
  deleteDoc(doc(db, `Projects/${projectId}`));

export const getProjectById = (projectId) =>
  getDoc(doc(db, `Projects/${projectId}`)).then((docSnap) => {
    if (docSnap.exists()) {
      return { ...docSnap.data(), projectId: docSnap.id };
    }
    return null;
  });

export const postProjects = async (values) => {
  const snap = await addDoc(collection(db, "Projects"), {
    ...values,
  });
  return snap.id;
};

export const postProducts = (values) =>
  addDoc(collection(db, "Products"), {
    ...values,
  })
    .then((result) => result)
    .catch((error) => error);

export const getProducts = () =>
  getDocs(collection(db, "Products")).then((querySnapshot) =>
    querySnapshot.docs.map((doc) => ({
      id: doc.id, // Adiciona o ID do documento ao objeto retornado
      ...doc.data(),
    }))
  );

export const sendResetCode = (email) =>
  sendPasswordResetEmail(auth, email)
    .then((result) => result)
    .catch((error) => error);

export const signOutUser = () => signOut(auth);

export const uploadImage = async (local, imageFile, id) => {
  const imageRef = ref(storage, `images/${local}/${id}/${imageFile.name}`);
  try {
    await uploadBytes(imageRef, imageFile);
  } catch (error) {
    return error;
  }
  return imageFile.name;
};

/**
 * Gets the image
 * @param {*} userId - franchisee Id
 * @param {*} imageFile - name of the image file
 * @param {*} tipId - tip Id
 * @returns - returns the image url
 */
export const getImage = async (local, imageName, id) => {
  const imageUrl = await getDownloadURL(
    ref(storage, `images/${local}/${id}/${imageName}`)
  );
  return imageUrl;
};
