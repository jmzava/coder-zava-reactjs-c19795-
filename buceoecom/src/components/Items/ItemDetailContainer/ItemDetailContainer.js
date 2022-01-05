import React from "react";
import { cargaPromesa } from "../../../helpers/mock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import CargandoSpinner from "../../Structure/Spinners/Spinner";
import"./ItemDetailContainer.css"

function ItemDetailContainer() {
    const [cargando, setCargando] = useState(true)
    const [prodIndividual, setProdIndividual] = useState({});

  useEffect(() => {
    cargaPromesa
      .then((resp) => setProdIndividual(resp.find(prod => prod.id === 1)))
      .catch((err) => console.log(err))
      .finally(()=> setCargando(false));
  },{});
  


  return (
    <div>
            {cargando ? (
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
