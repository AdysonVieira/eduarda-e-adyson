import React from 'react'

interface LoadingProps {
  message?: string
}

const Loading = ({ message }: LoadingProps) => {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <div className='spinner'></div>
      {
        message && <p>{message}</p>
      }
    </div>
  )
}

export default Loading
