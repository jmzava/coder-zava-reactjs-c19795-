import React from "react";
import { cargaPromesa } from "../../../helpers/mock";
import { useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import CargandoSpinner from "../../Structure/Spinners/Spinner";
import "./ItemListContainer.css";
import {useParams} from 'react-router-dom'
import { getFirestore } from "../../../firebase/firebase";
import { collection, getDocs, query } from "firebase/firestore";

function ItemListContainer() {
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState({});
  const {idCategoria}=useParams();


  useEffect(() => {

    const dbProductos = getFirestore()
    console.log(dbProductos);
    const prueba = query(collection(dbProductos,'Productos'))
    console.log(prueba)

    if (idCategoria==="todos") {
      const consultaProductos = query(collection(dbProductos, "Productos"))  
      getDocs(consultaProductos)
      console.log(consultaProductos)
      .then(resp => setProductos (resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
      .catch((err) => console.log(err))
      .finally(() => setCargando(false));

    }else{
      cargaPromesa
     
        .then((resp) =>setProductos(resp.filter((prod) => prod.categoria === idCategoria)))
        .catch((err) => console.log(err))
        .finally(() => setCargando(false));
    }


  }, [idCategoria]);






  // useEffect(() => {

  //   if (idCategoria==="todos") {
  //     cargaPromesa
  //     .then((resp) => setProductos(resp))
  //     .catch((err) => console.log(err))
  //     .finally(() => setCargando(false));
  //   }else{
  //     cargaPromesa
     
  //       .then((resp) =>setProductos(resp.filter((prod) => prod.categoria === idCategoria)))
  //       .catch((err) => console.log(err))
  //       .finally(() => setCargando(false));
  //   }
  // }, [idCategoria]);

  return (
    <div>
      {cargando ? (
        <h2 className="centerText">
          Cargando Contenido Listado Productos
          <CargandoSpinner />
        </h2>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
}

export default ItemListContainer;
