import { createContext, ReactNode, useState } from 'react'

export interface CartListValue {
  id: string
  name: string
  value: number
  amount: number
}
interface UpdateCoffeeAmount {
  id: string
  amount: number
}

interface CartListType {
  cartList: CartListValue[]
  insertCartList: (addCart: CartListValue) => void
  removeCoffee: (id: string) => void
  updateCoffeeAmount: (coffeeUpdate: UpdateCoffeeAmount) => void
  clearCartList: () => void
}

export const CartListContext = createContext({} as CartListType)

interface CyclesContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cartList, setCartList] = useState<CartListValue[]>([])

  function insertCartList(addCart: CartListValue) {
    setCartList((prevCartList) => {
      const updatedCartList = prevCartList.map((cartItem) => {
        if (cartItem.id === addCart.id) {
          return { ...cartItem, amount: cartItem.amount + addCart.amount }
        }
        return cartItem
      })

      if (!updatedCartList.some((cartItem) => cartItem.id === addCart.id)) {
        updatedCartList.push(addCart)
      }

      return updatedCartList
    })
  }

  function removeCoffee(id: string) {
    const updatedCartList = cartList.filter((item) => item.id !== id)
    setCartList(updatedCartList)
  }

  function updateCoffeeAmount(coffeeUpdate: UpdateCoffeeAmount) {
    const updatedCartList = cartList.map((item) => {
      if (item.id === coffeeUpdate.id) {
        return { ...item, amount: coffeeUpdate.amount }
      }
      return item
    })

    setCartList(updatedCartList)
  }

  function clearCartList() {
    setCartList([])
  }

  return (
    <CartListContext.Provider
      value={{
        cartList,
        insertCartList,
        removeCoffee,
        updateCoffeeAmount,
        clearCartList,
      }}
    >
      {children}
    </CartListContext.Provider>
  )
}
