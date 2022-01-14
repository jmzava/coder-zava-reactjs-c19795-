import { createContext, useState, useContext} from "react";


const CartContext = createContext([])

export function useCartContext(){
    return useContext(CartContext)
}

export const CartContextProvider = ({children}) => {

    const [cartLista, setCartLista] = useState([])

    function agregarItemCarrito (items) {
        setCartLista([...cartLista, items])
    }

    function vaciarCarrito(){
        setCartLista([])
    }
    return(
        <CartContext.Provider value ={{
            cartLista,
            agregarItemCarrito,
             vaciarCarrito
            }}
     > 
     {children}
     </CartContext.Provider>
    )
}