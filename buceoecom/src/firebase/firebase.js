import { initializeApp } from "firebase/app";

const firebaseConfiguracion = {
  apiKey: "AIzaSyA7599kuIkH6VsIqcYogQs_TYWGvFYbyq0",
  authDomain: "buceo-ecommerce-coderhouse.firebaseapp.com",
  projectId: "buceo-ecommerce-coderhouse",
  storageBucket: "buceo-ecommerce-coderhouse.appspot.com",
  messagingSenderId: "745181533895",
  appId: "1:745181533895:web:dc0c367fd07f93b8d6d0e2"
};

const aplicacion = initializeApp(firebaseConfiguracion);

export const usarFirestore=() =>{
  return aplicacion
}