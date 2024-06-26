import { createContext, useEffect, useReducer } from "react";
import instance from "../axios";
import ProductReducer from "../reducer/ProductReducer";
export const ProductContext = createContext();  
const ProductContextProvider = ({children})=>{
    const [state , dispatch] = useReducer(ProductReducer,{products:[]});
    useEffect(() => {
        (async () => {
          try {
            const { data } = await instance.get("/products");
            dispatch({type:"SET_PRODUCTS",payload:data});
          } catch (error) {
            console.log(error);
          }
        })();
      }, []);
    return <ProductContext.Provider value={{state,dispatch}}>{children}</ProductContext.Provider>
}
export default ProductContextProvider;