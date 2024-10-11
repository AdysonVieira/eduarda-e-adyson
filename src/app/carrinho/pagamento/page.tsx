'use client'
import React from 'react'
import PaymentSelector from './_components/PaymentSelector'
import { CreditCardIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/hooks/useCart'
import GiftCardDetails from '@/app/_components/GiftCardDetails'

const PaymentDataCheckout = () => {
  const { gift, guestData } = useCart();
 
  return (
    <section className='px-5 py-20 w-full flex flex-col gap-10 items-center min-h-[90vh]'>
      <div className='w-full flex flex-col gap-5 md:w-[600px] text-center px-5'>
        <GiftCardDetails />
        <div className='bg-blue-50 p-5 w-full border border-blue-100 rounded-lg'>
          <h1 className='uppercase'>Selecione o tipo de pagamento</h1>
        </div>
        <div className='w-full flex flex-col gap-5'>
          <Link href={"/carrinho/pagamento/pix"}>
            <PaymentSelector>
              <Image src={"/pixIcon.svg"} alt='pix' width={20} height={20} /><span>Pix</span>
            </PaymentSelector>
          </Link>
          <Link href={"/carrinho/pagamento/credito"}>
            <PaymentSelector>
              <CreditCardIcon className='stroke-blue-400'/><span>Cartão de Crédito</span>
            </PaymentSelector>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PaymentDataCheckout
