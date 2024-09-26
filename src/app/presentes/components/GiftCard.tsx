import React from 'react'
import Image from 'next/image'
import { formartCurrency } from '@/helpers/formatCurrency';
import { Button } from '@/components/ui/button';

interface IGiftCardProps {
  name: string;
  price: number;
  imgUrl: string;
  id: string
}

const GiftCard = ({name, price, imgUrl, id}: IGiftCardProps) => {
  return (
    <li className='flex flex-col justify-between items-center gap-4 max-w-48 min-w-36 p-5 bg-blue-100'>
      <Image
        className='object-cover mb-5 aspect-square'
        src={imgUrl}
        alt={name}
        width={200} 
        height={200}
        />
      <p>{name}</p>
      <p>{formartCurrency(price)}</p>
      <Button className='bg-blue-500 text-blue-100 w-full uppercase' variant="default">presentear</Button>
    </li>
  )
}

export default GiftCard
