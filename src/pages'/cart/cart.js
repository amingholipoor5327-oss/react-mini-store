import React, { useContext } from "react"
import { Shopcontext } from "../../component/coustom-hooks/usecontext"
import {Product } from "../../data/Product"
import { Showproduct } from "../shop/Show-product"
import "../shop/show.css"
export const Cart= ()=>{
    const {cartItem} =useContext(Shopcontext)
    return (
    <React.Fragment>
        <h1> this is cart page</h1>
        <div className="products-container"> 

            {Product.map((p)=>{
            if(cartItem.some((I)=> I.id===p.id && I.count>0))
                return <Showproduct data={p}/>
        })}
        
       
        
        </div>
       
    </React.Fragment>)
}