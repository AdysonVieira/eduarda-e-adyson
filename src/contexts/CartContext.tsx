'use client'

import { Gift } from "@/app/@types/gift";
import { GuestDataInputs } from "@/app/carrinho/pagamento/schema/GuestDataSchema";
import React, { ReactNode, SetStateAction } from "react";

type GuestConfirmation = {
  name: string,
  escorts: number,
}

interface CartContextProps {
  gift: Gift | undefined;
  message: string | undefined;
  setMessage: React.Dispatch<SetStateAction<string | undefined>>;
  setGift: React.Dispatch<SetStateAction<Gift | undefined>>;
  guestData: GuestDataInputs | null | undefined;
  setGuestData: React.Dispatch<SetStateAction<GuestDataInputs | undefined>>;
  guestConfirmation: GuestConfirmation | undefined | null
  setGuestConfirmation: React.Dispatch<SetStateAction<GuestConfirmation | undefined>>;
}

export const CartContext = React.createContext({} as CartContextProps)

interface CartProviderProps {
  children: ReactNode
}
const CartProvider = ({ children }: CartProviderProps) => {
  const [guestData, setGuestData] = React.useState<GuestDataInputs>()
  const [guestConfirmation, setGuestConfirmation] = React.useState<GuestConfirmation>()
  const [message, setMessage] = React.useState<string>()
  const [gift, setGift] = React.useState<Gift>()
  const [payment, setPayment] = React.useState()
  return (
    <CartContext.Provider value={{
      guestData,
      setGuestData,
      guestConfirmation,
      setGuestConfirmation,
      gift,
      setGift,
      message,
      setMessage
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => React.useContext(CartContext)

export default CartProvider;