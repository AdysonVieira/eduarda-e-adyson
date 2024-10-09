'use client'
import React from 'react'
import Image from 'next/image';

import { setPixCheckout } from '@/services/api'
import { PixQrCodeResponse } from '@/services/CheckoutPixService'
import Loading from '@/app/_components/Loading'
import Button from '@/app/_components/Button'
import PixInfo from './_components/PixInfo'

import { useCart } from '@/hooks/useCart'
import GiftCardDetails from '@/app/_components/GiftCardDetails';
import Error from '@/app/_components/Error';



const PixPaymentPage = () => {
  const { gift, guestData } = useCart()
  const [pixData, setPixData] = React.useState<PixQrCodeResponse>()
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)
  
  const handleClick = async () => {
    if (gift && guestData) {
      try {
        setLoading(true)
        const giftId = {id: gift?.id}
        const pixData = await setPixCheckout(giftId, guestData)
        setPixData(pixData)
      } catch(err) {
        setError(null)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
  }

  if (loading) return <Loading className='h-[100vh]' message='Gerando QR Code, aguarde!' />

  if (error) return <Error message={error} />

  return (
    <section className='px-5 py-20 w-full flex flex-col gap-10 items-center min-h-[80vh]'>
      <div className="w-full md:w-[600px] text-center flex flex-col gap-5 items-center px-5">
        {
          gift && !pixData &&
          <>
            <GiftCardDetails />
            <ul className='flex flex-col gap-3 text-start text-[0.75rem]'>
              <li>1. Para pagamento via Pix, gere a chave Pix clicando no botão abaixo.</li>
              <li>2. A chave pix expirará em 2 horas, após esse período será necessário gerar outra chave.</li>
              <li>3. Você receberá a confirmação do pagamento via Whatsapp pelo número cadastrado.</li>
            </ul>
            <Button onClick={handleClick}>Gerar chave pix</Button>
          </>
        }
      </div>
      {
        pixData && <PixInfo pixData={pixData} />
      }
    </section>
  )
}

export default PixPaymentPage