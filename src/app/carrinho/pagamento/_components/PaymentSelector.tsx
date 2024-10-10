import React, { ReactNode } from 'react'

interface PaymentSelectorProps {
  children: ReactNode;
}

const PaymentSelector = ({children}: PaymentSelectorProps ) => {
  return (
    <div className='w-full p-5 border border-blue-100 rounded-lg flex gap-5 hover:bg-blue-50'>
      {children}
    </div>
  )
}

export default PaymentSelector
