import React from 'react'
import TextScript from '../_components/TextScript'
import Image from 'next/image'
import Flower from '../_components/Flower'
import GiftCard from './_components/GiftCard'
import { db } from '@/lib/prisma'

const GiftPage = async () => {
  const gifts = await db.gift.findMany({})

  if (gifts) {
    return (
      <section className='px-5 py-20 w-full flex flex-col gap-10 items-center justify-center relative min-h-screen'>
  
        <Flower
          src="/flor.png"
          className="absolute lg:w-[40vw] lg:top-[-20px] lg:left-[-80px] w-[50vw] top-[0] left-[-20px]"
        />
  
        <div className="max-w-[800px] text-center flex flex-col gap-5 items-center">
          <Image
            src="/brasao.png"
            alt='igreja'
            width={200} 
            height={200}
          />
          <div>
            <p className='text-[1.8rem] uppercase pb-4'>Nossa lista de</p>
            <TextScript>presentes</TextScript>
          </div>
          <p>Queridos familiares e amigos, para nós, a presença de vocês neste dia tão especial é o maior presente que poderíamos receber. Mas, se vocês também quiserem nos presentear, ficaremos muito agradecidos.</p>
        </div>
        <ul className='flex flex-wrap justify-center gap-5 max-w-[90vw]'>
          {
            gifts.map((gift) => <GiftCard key={gift.id} id={gift.id} name={gift.name} price={Number(gift.price)} imgUrl={gift.imgUrl} />)
          }
        </ul>
      </section>
    )
  }
}

export default GiftPage