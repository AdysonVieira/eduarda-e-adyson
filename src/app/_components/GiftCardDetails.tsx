import React from 'react'
import Image from 'next/image';

import { useCart } from '@/hooks/useCart';
import { formatCurrency } from '@/helpers/formatCurrency';

const GiftCardDetails = () => {
  const { gift } = useCart()

  if (gift)
  return (
    <div className='flex justify-between items-center gap-5 bg-blue-50 p-5 rounded-lg w-full mb-10 border border-blue-100'>
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
      <p>{formatCurrency(Number(gift.price))}</p>
    </div>
  )
}

export default GiftCardDetails
