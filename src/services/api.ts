import axios from 'axios'
import { GuestDataInputs } from '@/app/carrinho/_schema/GuestDataSchema'
import { Gift } from '@prisma/client'
import { CheckoutResponse } from './CheckoutService'

export const api = axios.create({
  baseURL: process.env.BASE_URL
});

export const apiAsaas = axios.create({
  baseURL: process.env.ASAAS_API_URL,
  headers: {
    access_token: process.env.ASAAS_API_ACCESS_TOKEN,
  }
});


export const setCheckout = async (gift: Gift, guest: GuestDataInputs)=> {
  const res = await api.post("/api/checkout", {
    gift,
    guest,
  })
  return res.data
};