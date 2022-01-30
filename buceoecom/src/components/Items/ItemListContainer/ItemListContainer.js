// import React from "react";
import { useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import CargandoSpinner from "../../Structure/Spinners/Spinner";
import "./ItemListContainer.css";
import {useParams} from 'react-router-dom'
import { collection, getDocs, query, getFirestore, where } from "firebase/firestore";

function ItemListContainer() {
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState({});
  const {idCategoria}=useParams();

  useEffect(() => {

    const dbProductos = getFirestore()

    const consultaProductos = idCategoria? 
                                    query(collection(dbProductos, "Productos"), where('categoria', '==', idCategoria)) 
                              : 
                                    query(collection(dbProductos, "Productos"))  

    getDocs(consultaProductos)
    .then(resp => setProductos (resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
    .catch(err => err)
    .finally(() => setCargando(false));

  }, [idCategoria]);

  return (
    <div>
      {cargando ? (
          <CargandoSpinner mensaje="Cargando Contenido Listado Productos"/>
      ) : (
          <ItemList productos={productos} />
      )}
    </div>
  );
}

export default ItemListContainer;






//  esta era la fake promise
// 
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