import { AlertCircleIcon } from 'lucide-react'
import React from 'react'

interface ErrorProps {
  message: string
}

const Error = ({message}: ErrorProps) => {
  return (
    <div className='w-full flex flex-col items-center justify-center min-h-[80vh]'>

      <AlertCircleIcon size={30} className='stroke-amber-700' />
      <p>{message}</p>
    </div>
  )
}

export default Error
