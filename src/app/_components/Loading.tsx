import React from 'react'
import { twMerge } from 'tailwind-merge'

interface LoadingProps {
  message?: string
  className?: string
}

const Loading = ({ message, className }: LoadingProps) => {
  return (
    <div className={twMerge('flex flex-col items-center justify-center gap-5 w-full', className)}>
      <div className='spinner'></div>
      {
        message && <p>{message}</p>
      }
    </div>
  )
}

export default Loading
