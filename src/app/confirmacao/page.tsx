"use client"

import React, { FormEvent, FormEventHandler } from 'react'
import TextScript from '../_components/TextScript'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Flower from '../_components/Flower'
import { api, setGuestConfirmation } from '@/services/api'

const ConfirmationPage = () => {
  const inputRef = React.useRef<HTMLInputElement | null>(null)

  const submitHandle = async (e: FormEvent) => {
    e.preventDefault()
    if (inputRef.current?.value) {
      const res = await setGuestConfirmation({
          name: inputRef.current?.value
        })
        return res
    }
  }

  return (
    <section className='bg-blue-50 px-5 py-20 w-full flex flex-col gap-10 items-center justify-center relative min-h-screen'>

      <Flower
        src="/flor.png"
        className="absolute lg:w-[40vw] lg:top-[-20px] lg:left-[-80px] w-[50vw] top-[0] left-[-20px]"
      />
      <div className="w-[400px] text-center flex flex-col gap-5 items-center">
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
        <form
          className='flex flex-col gap-4 w-full'
          onSubmit={submitHandle}
        >
          <input
            className='border-1 ring-1 border-blue-950 w-full rounded-sm px-2 py-1 text-[1rem]'
            type='text'
            name='name'
            id='name'
            ref={inputRef}
            placeholder='Nome completo'
            autoFocus
          />
          <Button className='bg-blue-500 text-blue-100 w-full uppercase' variant="default">confirmar presença</Button>
        </form>
      </div>
    </section>
  )
}

export default ConfirmationPage
