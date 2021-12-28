import React from "react";
import { cargaPromesa } from "../../../helpers/mock";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import CargandoSpinner from "../../Structure/Spinners/Spinner";
import"./ItemListContainer.css"

function ItemListContainer() {
    const [cargando, setCargando] = useState(true)
    const [productos, setProductos] = useState([]);

  useEffect(() => {
    cargaPromesa
      .then((resp) => setProductos(resp))
      .catch((err) => console.log(err))
      .finally(()=> setCargando(false));
  }, []);

  return (
    <div>
      
      {cargando ? 
      <h2 className="centerText">Cargando Contenido <CargandoSpinner/></h2> : 
      <ItemList productos={productos} />
    }
    </div>
  );
}

export default ItemListContainer;
