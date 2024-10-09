'use client'

import { PaymentData } from "@/app/@types/checkout";
import { Gift } from "@/app/@types/gift";
import { GuestDataInputs } from "@/app/carrinho/_schema/GuestDataSchema";
import { PaymentCardDataInputs } from "@/app/carrinho/pagamento/_schema/PaymentCardDataSchema";
import { PaymentGuestDataInputs } from "@/app/carrinho/pagamento/_schema/PaymentGuestDataSchema";
import { CreditCardResponse } from "@/services/CheckoutCreditCardService";
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
  paymentGuestData: PaymentGuestDataInputs | undefined
  setPaymentGuestData: React.Dispatch<SetStateAction<PaymentGuestDataInputs | undefined>>;
  paymentCardData: PaymentCardDataInputs | undefined
  setPaymentCardData: React.Dispatch<SetStateAction<PaymentCardDataInputs | undefined>>;
  order: CreditCardResponse | undefined
  setOrder: React.Dispatch<SetStateAction<CreditCardResponse | undefined>>;
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
  const [paymentGuestData, setPaymentGuestData] = React.useState<PaymentGuestDataInputs>()
  const [paymentCardData, setPaymentCardData] = React.useState<PaymentCardDataInputs>()
  const [order, setOrder] = React.useState<CreditCardResponse>()

  const resetValues = React.useCallback(() => {
    setGift(undefined)
    setGuestData(undefined)
    setPaymentGuestData(undefined)
    setPaymentCardData(undefined)
  }, [])
  return (
    <CartContext.Provider value={{
      gift,
      setGift,
      guestData,
      setGuestData,
      guestConfirmation,
      setGuestConfirmation,
      paymentGuestData,
      setPaymentGuestData,
      paymentCardData,
      setPaymentCardData,
      order,
      setOrder,
      resetValues,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => React.useContext(CartContext)

export default CartProvider;