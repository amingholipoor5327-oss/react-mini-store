// import { useState  , createContext } from "react";

// export const Shopcontext= createContext(null)

// export const Shopprovider=(props)=>{
//     const[cartItem , setCartItme]=useState([])
    
//     const increase = (itemId)=>{
//         if( !cartItem.find((i)=>i.id===itemId))
//             setCartItme([...cartItem , {id: itemId , count:1}])
//         else
//             setCartItme(cartItem.map((i )=>{
         
//         if(i.id===itemId)
//             return{ ...i , count :i.count+1   }
//         else return i
//             }))
//     }

//     const decrease = (itemId)=>{
//         setCartItme(cartItem.map(( ID )=>{
//             if(ID.id===itemId)
//                 return {...ID , count :  ID.count===0 ? 0 :  ID.count-1}
//             else return  ID
//         }))
//     }

//     const data = {cartItem, decrease , increase}
//     return <Shopcontext.Provider value={data}> {props.children}</Shopcontext.Provider>
// }