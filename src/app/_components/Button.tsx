'use client'
import React, { ReactNode } from 'react'
import { useFormStatus } from 'react-dom'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode
  className?: string
} 

const Button: React.FC<ButtonProps> = ({ children, className, ...props}) => {
  const { pending } = useFormStatus()
  return (
    <button disabled={pending} {...props} className={twMerge('uppercase w-full bg-blue-500 text-white hover:bg-blue-600 p-2 rounded-lg', className)}>
      {pending ? 'carregando' : children}
    </button>
  )
}

export default Button
