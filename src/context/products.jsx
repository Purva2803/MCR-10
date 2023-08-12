
import { createContext, useState } from "react";
import { inventoryData } from "../data/data";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {


     const [products, setProducts] = useState(inventoryData)



     const AddProduct = (product) => {

            setProducts([...products, product])
            console.log(products)
         }


     return (

        <ProductContext.Provider value={{ products, AddProduct }}>
            {children}
        </ProductContext.Provider>
        )
}


   
        
            