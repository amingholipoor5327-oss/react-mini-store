import { createContext    } from "react"
import { useCart } from "./usecart" 

export const Shopcontext= createContext({
    decrease:()=>{} ,
    increase: ()=>{} ,
    cartItem:   [] , 
})
export const ShopProvider =(props)=>{

    return  <Shopcontext.Provider value={useCart()}>{props.children}</Shopcontext.Provider>

 } 