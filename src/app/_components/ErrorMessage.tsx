import React, { ReactNode } from 'react'

interface IErrorProps {
  children: ReactNode
}

const ErrorMessage = ({ children }: IErrorProps) => {
  return (
    <span className='text-red-500 text-start text-xs'>
      {children}    
    </span>
  )
}

export default ErrorMessage
