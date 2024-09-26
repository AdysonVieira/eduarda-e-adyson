import { CheckCircle } from 'lucide-react'
import React from 'react'

const Success = () => {
  return (
    <>
      <CheckCircle size={40} className='stroke-blue-300' />
      <p>Presença confirmada com sucesso!</p>
    </>
  )
}

export default Success
