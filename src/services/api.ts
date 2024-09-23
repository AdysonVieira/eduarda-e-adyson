import { Guest } from '@/app/@types/guest'
import axios from 'axios'
import Axios from 'axios'

export const api = Axios.create({
  baseURL: process.env.BASE_URL
})



export const setGuestConfirmation = async (data: Guest) => {
  const res = await axios.post("http://localhost:5000/api/guest", data)
  return res.data
}

