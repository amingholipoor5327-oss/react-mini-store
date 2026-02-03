import { Product } from "../../data/Product"
import { Showproduct } from "./Show-product"
import React from "react"

export const Shop= ()=>{
    return (
    <React.Fragment>
        {Product.map((datalist)=>{
            return <Showproduct  data={datalist}/>
        })}
     </React.Fragment>)
}