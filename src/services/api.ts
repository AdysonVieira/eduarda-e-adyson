import { Gift } from '@/app/@types/gift'
import { GuestInputs } from '@/app/confirmacao/schema/confirmationSchema'
import { GuestDataInputs } from '@/app/presentear/pagamento/schema/GuestDataSchema'
import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL
})

export const setGuestConfirmation = async (data: GuestInputs) => {
  const res = await api.post('/api/guest', data)
  return res.status
}

export const setGuestData = async (data: GuestDataInputs): Promise<number> => {
  const res = await api.post("/api/checkout", data)
  return res.status
}

export const getGifts = async (): Promise<Gift[]> => {
  const res = await api.get("/api/gifts")
  return res.data
}

