'use client'
import React, { Suspense } from 'react'
import PaymentGuestDataForm from '../_components/PaymentGuestDataForm'
import PaymentCardDataForm from '../_components/PaymentCardDataForm'
import { useCart } from '@/hooks/useCart'
import Loading from '@/app/_components/Loading'


const CreditCardPaymentPage = () => {
  const { paymentGuestData } = useCart()
  
  if (!paymentGuestData) return (
    <div className='py-10 flex justify-center'>
      <Suspense fallback={<Loading className='h-[100vh]' />}>
        <PaymentGuestDataForm />
      </Suspense>
    </div>
  )

  return (
    <div className='py-10 flex justify-center'>
      <Suspense fallback={<Loading className='h-[100vh]' />}>
        <PaymentCardDataForm />
      </Suspense>
    </div>
  )
}

export default CreditCardPaymentPage
