import React from 'react'
import Image from 'next/image'

interface IGiftCardProps {
  name: string;
  price: number;
  imgUrl: string;
}

const GiftCard = ({name, price, imgUrl}: IGiftCardProps) => {
  return (
    <li className='max-w-48 min-w-40 p-5'>
      <Image
        className='object-cover mb-5'
          src={imgUrl}
          alt={name}
          width={200} 
          height={200}
        />
      <p>{name}</p>
      <p>{price}</p>
    </li>
  )
}

export default GiftCard
