/* eslint-disable no-undef */
/* eslint-disable object-shorthand */

import { createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { auth, db } from "./firebase";

export const createUser = (email, password, payload) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      addDoc(collection(db, 'Users'), {
        ...payload
      })
    })
    .catch(err => setError(err.message))

export const getProjects = () =>
  getDocs(collection(db, 'Projects')).then((querySnapshot) =>

    querySnapshot.docs.map((doc) => ({
      ...doc.data()
    }))
  );

export const postProjects = (title, description, image) =>
  addDoc(collection(db, 'Projects'), {
    image: image,
    title: title,
    description: description,
    public: true
  }).then((result) => result).catch((error) => error)


export const sendResetCode = (email) =>
  sendPasswordResetEmail(auth, email)
    .then((result) => result).catch((error) => error)
