import { CartContext } from '@/contexts/CartContext'
import React from 'react'

export const useCart = () => {
  return React.useContext(CartContext)
}