import React from "react";
import { cargaPromesa } from "../../../helpers/mock";
import { useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import CargandoSpinner from "../../Structure/Spinners/Spinner";
import "./ItemListContainer.css";
import {useParams} from 'react-router-dom'

function ItemListContainer() {
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState([]);
  const {idCategoria}=useParams();

  useEffect(() => {

    if (idCategoria==="todos") {
      cargaPromesa
      .then((resp) => setProductos(resp))
      .catch((err) => console.log(err))
      .finally(() => setCargando(false));
    }else{
      cargaPromesa
     
        .then((resp) =>setProductos(resp.filter((prod) => prod.categoria === idCategoria)))
        .catch((err) => console.log(err))
        .finally(() => setCargando(false));
    }
  }, [idCategoria]);

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
