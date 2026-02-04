import { Product } from "../../data/Product"
import { Showproduct } from "./Show-product"
import "./show.css"
export const Shop= ()=>{
    return (
        <div className="products-container">  
              {Product.map((datalist)=>{
            return <Showproduct  data={datalist}/>
        })}
        </div>
    
      )
}