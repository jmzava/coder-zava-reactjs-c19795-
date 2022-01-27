import { createContext, useState, useContext} from "react";

const OrderContext = createContext([])

export function useOrderContext(){
    return useContext(OrderContext)
}

export const OrderContextProvider = ({children}) => {

    const [ordenCompra, setOrdenCompra] = useState({})
    
    function agregarOrden(datosForm){
        setOrdenCompra(datosForm)
    }
    function vaciarOrden(){
        setOrdenCompra([])
    }
return(
    <OrderContext.Provider value ={{
            ordenCompra,
            vaciarOrden,
            agregarOrden
            }}
    > 
    {children}
    </OrderContext.Provider>
    )
}
