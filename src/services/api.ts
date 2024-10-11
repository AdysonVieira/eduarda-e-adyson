import axios from 'axios'
import { GiftData, GuestData, PaymentType } from '@/app/_types/checkout'
import { PaymentGuestDataInputs } from '@/app/carrinho/pagamento/_schema/PaymentGuestDataSchema'
import { PaymentCardDataInputs } from '@/app/carrinho/pagamento/_schema/PaymentCardDataSchema'
import { PixQrCodeResponse } from './CheckoutPixService'
import { GuestDataInputs } from '@/app/carrinho/_schema/GuestDataSchema'
import { CreditCardResponse } from './CheckoutCreditCardService'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL
});

export const apiAsaas = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ASAAS_API_URL,
  headers: {
    access_token: process.env.ASAAS_API_ACCESS_TOKEN,
  }
});

export const setCreditCardCheckout = async (gift: GiftData, guest: GuestDataInputs, paymentGuestData: PaymentGuestDataInputs, paymentCardData: PaymentCardDataInputs,): Promise<CreditCardResponse> => {

  const res = await api.post("/api/checkout", {
    gift,
    guest,
    paymentGuestData,
    paymentCardData,
  })
  return res.data
};

export const setPixCheckout = async (gift: GiftData, guest: GuestDataInputs): Promise<PixQrCodeResponse> => {
  const res = await api.post("/api/pix", { gift, guest })
  return res.data
};


