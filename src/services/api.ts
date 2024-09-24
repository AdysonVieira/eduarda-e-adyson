import { Gift } from '@/app/@types/gift'
import { GuestInputs } from '@/app/confirmacao/schema/confirmationSchema'
import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.BASE_URL
})

export const setGuestConfirmation = async (data: GuestInputs) => {
  const res = await api.post("/api/guest", data)
  return res.data
}

export const getGifts = async (): Promise<Gift[]> => {
  const res = await api.get("/api/gifts")
  return res.data
}

