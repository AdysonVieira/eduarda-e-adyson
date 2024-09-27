'use client'

import { Gift } from "@/app/@types/gift";
import React, { ReactNode, SetStateAction } from "react";

interface CartContextProps {
  gift: Gift | undefined;
  setGift: React.Dispatch<SetStateAction<Gift | undefined>>;
  guestName: string | null | undefined;
  setGuestName: React.Dispatch<SetStateAction<string | undefined>>;
  message: string | undefined
  setMessage: React.Dispatch<SetStateAction<string | undefined>>;
}

const CartContext = React.createContext({} as CartContextProps)

interface CartProviderProps {
  children: ReactNode
}
const CartProvider = ({ children }: CartProviderProps) => {
  const [guestName, setGuestName] = React.useState<string>()
  const [gift, setGift] = React.useState<Gift>()
  const [message, setMessage] = React.useState<string>()
  return (
    <CartContext.Provider value={{
      guestName,
      setGuestName,
      message, 
      setMessage,
      gift,
      setGift
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;