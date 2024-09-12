import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge'

interface FlowerProps {
  src: string;
 className: string;
}
const Flower = ({src, className}: FlowerProps) => {
  return (
    <div className={twMerge("absolute w-[40vw]", className)}>
      <Image
        src={src}
        className=""
        alt='flor azul'
        width={0}
        height={0}
        sizes='100%'
      />
    </div>
  )
}

export default Flower
