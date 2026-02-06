 import { useState } from "react"

export const useCart = () => {

  const [cartItem , setCartItme] = useState([]) 

  const increase = (itemId) => {

    if (!cartItem.find(i => i.id === itemId))
      setCartItme([...cartItem, { id: itemId, count: 1 }])

    else
      setCartItme(
        cartItem.map(i =>
          i.id === itemId
            ? { ...i, count: i.count + 1 }
            : i
        )
      )
  }

  const decrease = (itemId) => {
    setCartItme(
      cartItem.map(i =>
        i.id === itemId
          ? { ...i, count: Math.max(0, i.count - 1) }
          : i
      )
    )
  }

  return { decrease, increase, cartItem }
}
