import React from 'react'
import "./Cart.css"

function CartItem({productos}) {



    return (       
        <div>
                  <div className="cartCelda">IMG </div>
                  <div className="cartCelda">descrip </div>
                  <div className="cartCelda">$12,640</div>
                  <div className="cartCelda">cant</div>
                  <div className="cartCelda">calcular</div>
                     <span className="cartRemoverItemSpan"> 
                     <button className="cartBotonRemover">Remover</button>
                     </span>
        </div>
    );
}

export default CartItem



