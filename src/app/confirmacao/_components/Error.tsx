import Button from '@/app/_components/Button'
import { X } from 'lucide-react'
import React, { ReactEventHandler, SetStateAction } from 'react'

interface ErrorProps {
  onClick: React.Dispatch<SetStateAction<boolean>>
}

const Error = ({onClick}: ErrorProps) => {
  return (
    <>
      <X size={40} className='stroke-blue-300' />
      <p>Algo deu errado, tente novamente</p>
      <Button onClick={() => onClick(false)}>Tentar novamente</Button>
    </>
  )
}

export default Error
