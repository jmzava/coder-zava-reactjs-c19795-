import React from "react";
import { cargaPromesa } from "../../../helpers/mock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import CargandoSpinner from "../../Structure/Spinners/Spinner";
import"./ItemDetailContainer.css"
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [cargandoProdIndividual, setCargandoProdIndividual] = useState(true)
    const [prodIndividual, setProdIndividual] = useState({});

  const {idProducto} = useParams()

  useEffect(() => {
    cargaPromesa
    .then((resp) => setProdIndividual(resp.find(prod => prod.id === idProducto)))
    .catch((err) => console.log(err))
    .finally(()=> setCargandoProdIndividual(false));
  },[idProducto]);
  

  return (
    <div>
            {cargandoProdIndividual ? (
           <h2 className="centerText">
          Cargando Contenido Item Individual <CargandoSpinner />
        </h2>
      ) : (
        <ItemDetail prodIndividual={prodIndividual}/>
      )
}
    </div>
  );
}

export default ItemDetailContainer;
