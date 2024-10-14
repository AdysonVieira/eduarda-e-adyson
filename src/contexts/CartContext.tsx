'use client'

import { GuestDataInputs } from "@/app/carrinho/_schema/GuestDataSchema";
import { Gift } from "@prisma/client";
import React, { ReactNode, SetStateAction } from "react";

type GuestConfirmation = {
  name: string,
  escorts: number,
}

interface CartContextProps {
  gift: Gift | undefined;
  setGift: React.Dispatch<SetStateAction<Gift | undefined>>;
  guestData: GuestDataInputs | null | undefined;
  setGuestData: React.Dispatch<SetStateAction<GuestDataInputs | undefined>>;
  guestConfirmation: GuestConfirmation | undefined | null
  setGuestConfirmation: React.Dispatch<SetStateAction<GuestConfirmation | undefined>>;
  resetValues: () => void;
}

export const CartContext = React.createContext({} as CartContextProps)

interface CartProviderProps {
  children: ReactNode
}
const CartProvider = ({ children }: CartProviderProps) => {
  const [guestData, setGuestData] = React.useState<GuestDataInputs>()
  const [guestConfirmation, setGuestConfirmation] = React.useState<GuestConfirmation>()
  const [gift, setGift] = React.useState<Gift>()


  const resetValues = React.useCallback(() => {
    setGift(undefined)
    setGuestData(undefined)
  }, [])
  return (
    <CartContext.Provider value={{
      gift,
      setGift,
      guestData,
      setGuestData,
      guestConfirmation,
      setGuestConfirmation,
      resetValues,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => React.useContext(CartContext)

export default CartProvider;