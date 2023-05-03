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
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "./firebase";

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

export const getProjectById = (projectId) =>
  getDoc(doc(db, `Projects/${projectId}`)).then((docSnap) => {
    if (docSnap.exists()) {
      return { ...docSnap.data(), projectId: docSnap.id };
    }
    return null;
  });

export const postProjects = (values) =>
  addDoc(collection(db, "Projects"), {
    ...values,
  })
    .then((result) => result)
    .catch((error) => error);

export const sendResetCode = (email) =>
  sendPasswordResetEmail(auth, email)
    .then((result) => result)
    .catch((error) => error);

export const signOutUser = () => signOut(auth);
