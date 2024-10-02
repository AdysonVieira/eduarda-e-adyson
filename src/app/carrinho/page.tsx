'use client'

import React from 'react'
import { useCart } from '@/hooks/useCart'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { HeartIcon } from 'lucide-react'
import { formatCurrency } from '@/helpers/formatCurrency'
import Button from '@/app/_components/Button'

const Cart = () => {
  const { gift } = useCart()
  const router = useRouter()

  if (gift) return (
    <div className='flex flex-col justify-center items-center bg-blue-50 min-h-[100vh] w-full'>

      <div className="w-full md:w-[600px] text-center flex flex-col gap-5 items-center px-5">
        <h1 className='uppercase text-[1.5rem] flex items-center gap-2'>Amamos sua escolha <HeartIcon /></h1>

        <div className='flex justify-between items-center gap-5 bg-blue-100 p-5 rounded-lg w-full'>
          <div className='flex gap-4 items-center'>
            <Image
              className='object-cover aspect-square rounded-md'
              src={gift.imgUrl}
              alt={gift.name}
              width={80}
              height={80}
            />
            <p>{gift.name}</p>
          </div>
          <p>{formatCurrency(gift.price)}</p>
        </div>
        <Button onClick={() => router.push('/carrinho/info')}>ir para pagamento</Button>
      </div>
    </div>
  )

  return router.push("/presentes")
}

export default Cart
