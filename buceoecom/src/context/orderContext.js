import { createContext, useState, useContext} from "react";

const OrdenContext = createContext([])

export function useOrdenContext(){
    return useContext(OrdenContext)
}

export const OrdenContextProvider = ({children}) => {

    const [ordenCompra, setOrdenCompra] = useState({})


    function agregarOrden(datosForm){
        setOrdenCompra(datosForm)
    }
    function vaciarOrden(){
        setOrdenCompra([])
    }



return(
    <OrdenContext.Provider value ={{
            ordenCompra,
            vaciarOrden,
            agregarOrden
            }}
    > 
    {children}
    </OrdenContext.Provider>
    )
}
