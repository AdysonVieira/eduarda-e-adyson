import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge'

interface FlowerProps {
  src: string;
 className: string;
}
const Flower = ({src, className}: FlowerProps) => {
  return (
      <Image
        src={src}
        className={twMerge("absolute z-[-1]", className)}
        alt='flor azul'
        width={0}
        height={0}
        sizes='100%'
      />
  )
}

export default Flower
