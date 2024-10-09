import { Button } from '@/components/ui/button'
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
      <Button variant="default" className='text-blue-950 bg-blue-200' onClick={() => onClick(false)}>Tentar novamente</Button>
    </>
  )
}

export default Error
