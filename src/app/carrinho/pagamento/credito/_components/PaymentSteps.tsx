import { useCart } from '@/hooks/useCart'
import { AvatarIcon } from '@radix-ui/react-icons'
import { ChevronRight, CreditCard, IdCard } from 'lucide-react'
import React from 'react'

const PaymentSteps = () => {
  const { paymentGuestData, paymentCardData } = useCart()


  return (
    <div className='w-full flex justify-center items-center p-4'>
      <div className="flex gap-2 items-center">
        <div className="flex items-center justify-center gap-1 text-sm font-semibold p-2">
          <IdCard className={`${paymentGuestData ? 'text-green-700' : 'text-gray-400'}`} />
          <p className={`${paymentGuestData ? 'text-green-700' : 'text-gray-400'}`}>Dados do títular</p>    
        </div>
        <ChevronRight size={14} className={`${paymentGuestData ? 'text-green-700' : 'text-gray-400'}`} />
        <div className="flex items-center justify-center gap-1 text-sm font-semibold p-2">
          <CreditCard className={`${paymentCardData ? 'text-green-700' : 'text-gray-400'}`} />
          <p className={`${paymentCardData ? 'text-green-700' : 'text-gray-400'}`}>Dados do cartão</p>    
        </div>
      </div>
    </div>
  )
}

export default PaymentSteps
