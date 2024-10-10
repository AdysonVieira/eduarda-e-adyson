'use client'
import React, { Suspense } from 'react'
import PaymentGuestDataForm from './_components/PaymentGuestDataForm'
import PaymentCardDataForm from './_components/PaymentCardDataForm'
import { useCart } from '@/hooks/useCart'
import Loading from '@/app/_components/Loading'
import PaymentSteps from './_components/PaymentSteps'


const CreditCardPaymentPage = () => {
  const { paymentGuestData } = useCart()



  if (!paymentGuestData) return (
    <div className='py-10 flex flex-col items-center justify-center'>
      <Suspense fallback={<Loading className='h-[100vh]' />}>
        <PaymentSteps />
        <PaymentGuestDataForm />
      </Suspense>
    </div>
  )
  
  return (
    <div className='py-10 flex flex-col items-center justify-center'>
      <Suspense fallback={<Loading className='h-[100vh]' />}>
        <PaymentSteps />
        <PaymentCardDataForm />
      </Suspense>
    </div>
  )
}

export default CreditCardPaymentPage
