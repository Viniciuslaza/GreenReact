/* eslint-disable no-undef */
/* eslint-disable object-shorthand */

import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from "./firebase";


export const getEventos = () =>
  getDocs(collection(db, 'Eventos')).then((querySnapshot) =>

    querySnapshot.docs.map((doc) => ({
      ...doc.data()
    }))
  );

export const postEventos = (title, description, image) =>

  addDoc(collection(db, 'Eventos'), {
    image: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-agricultura-uma-atividade-primaria-que-fornece-alimentos-materia-prima-para-industria-57b317bcc8349.jpg',
    title: title,
    description: description,
    public: true
  }).then(() => {
    console.log('foi')
  }).catch((error) => {
    console.log(error)
  })