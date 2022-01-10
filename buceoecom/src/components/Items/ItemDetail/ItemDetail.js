import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";

function ItemDetail({ prodIndividual }) {
  const { imagen, titulo, desc, precio, inicial, stock, minimo } =
    prodIndividual;
  const navigate = useNavigate();
  return (
    <div className="containerItemDetail">
      <div className="boxItemDetail">
        <img className="prodImgItemDetail" src={imagen} alt={titulo} />
        <div className="prodInfoItemDetail">
            <h1 className="prodTituloItemDetail">{titulo}</h1>
            <p className="prodPrecioItemDetail">${precio}</p>
            <p className="prodDescItemDetail">{desc}</p>
            <br />
            <br />
            <ItemCount
                contadorInicial={inicial}
                contadorStock={stock}
                contadorMinimo={minimo} />
            <br />
            <br />
            <button className="btnItemDetail btnCardItemDetail" onClick={()=>navigate(-1)}>Volver</button>
            <button className="btnItemDetail btnCardItemDetail">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;