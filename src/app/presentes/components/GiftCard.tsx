'use client'

import React from 'react'
import Image from 'next/image'
import { formartCurrency } from '@/helpers/formatCurrency';
import Button from '@/app/_components/Button';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';

interface IGiftCardProps {
  name: string;
  price: number;
  imgUrl: string;
  id: string
}

const GiftCard = ({name, price, imgUrl, id}: IGiftCardProps) => {
  const router = useRouter()

  const { setGift }= useCart()

  const handleClick = () => {
    setGift({id, name, price, imgUrl})
    router.push("/presentear")
  }

  return (
    <li className='flex flex-col justify-between items-center gap-4 max-w-48 min-w-36 rounded-xl p-5 bg-blue-100'>
      <Image
        className='object-cover mb-5 aspect-square rounded-md'
        src={imgUrl}
        alt={name}
        width={150} 
        height={150}
        />
      <p>{name}</p>
      <p className='text-start'>{formartCurrency(Number(price))}</p>
      <Button className='w-full' onClick={handleClick}>presentear</Button>
    </li>
  )
}

export default GiftCard
