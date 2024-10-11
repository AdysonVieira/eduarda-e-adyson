'use client'
import React from 'react'
import TextScript from '../_components/TextScript'
import Image from 'next/image'
import Flower from '../_components/Flower'
import GuestForm from './_components/GuestForm'

const ConfirmationPage = () => {
  return (
    <section className='px-5 py-20 w-full flex flex-col gap-10 items-center justify-center relative min-h-screen'>

      <Flower
        src="/flor.png"
        className="absolute lg:w-[40vw] lg:top-[-20px] lg:left-[-80px] w-[50vw] top-[0] left-[-20px]"
      />
      <div className="w-full md:w-[400px] text-center flex flex-col gap-5 items-center px-5">
        <Image
          src="/brasao.png"
          alt='igreja'
          width={200} 
          height={200}
        />
        <div>
          <p className='text-[1.8rem] uppercase pb-4'>confirme sua</p>
          <TextScript>presença</TextScript>
        </div>
        <p>Aguardamos sua confirmação até o dia 14 de novembro</p>
        <GuestForm />
      </div>
    </section>
  )
}

export default ConfirmationPage
