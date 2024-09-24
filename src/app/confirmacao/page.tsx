"use client"

import React, { FormEvent } from 'react'
import TextScript from '../_components/TextScript'
import { setGuestConfirmation } from '@/services/api'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Flower from '../_components/Flower'
import { confirmationSchema, GuestInputs } from './schema/confirmationSchema'
import ErrorMessage from '../_components/ErrorMessage'

const ConfirmationPage = () => {
  const { register, handleSubmit, formState: {errors} } = useForm<GuestInputs>({
    resolver: yupResolver(confirmationSchema),
  })

  const onSubmit: SubmitHandler<GuestInputs> = async (data) => {
    await setGuestConfirmation(data)
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
          className='flex flex-col gap-6 w-full'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label htmlFor='name' className='block text-start text-[0.75rem]'>Nome</label>
            <input
              className='border-1 ring-1 border-blue-950 w-full rounded-sm px-2 py-1 text-[1rem]'
              {...register("name")}
              autoFocus
              placeholder='Digite seu nome completo'
            />
            { errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage> }
          </div>

          <div>
            <p className='text-start mb-5'>Quantos acompanhantes?</p>
            <div className='flex justify-between items-center gap-7'>
              <label htmlFor='name' className='block text-start text-[0.75rem]'>Adultos</label>
              <input
                type='number' 
                className='border-1 ring-1 border-blue-950 rounded-sm px-2 py-1 text-[1rem] w-20'
                defaultValue={0}
                {...register("escorts")}
              />
            </div>
          </div>
          <Button className='bg-blue-500 text-blue-100 w-full uppercase' variant="default">confirmar presença</Button>
        </form>
      </div>
    </section>
  )
}

export default ConfirmationPage
