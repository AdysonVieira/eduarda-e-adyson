"use client"

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { confirmationSchema, GuestInputs } from '../_schema/confirmationSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import ErrorMessage from '@/app/_components/ErrorMessage'
import Button from '@/app/_components/Button'
import { useCart } from '@/contexts/CartContext'
import Loading from '@/app/_components/Loading'
import Success from './Success'
import { api } from '@/services/api'


const GuestForm = () => {

  const [loading, setLoading] = React.useState<boolean>(false)
  const [success, setSucess] = React.useState<boolean>(false)
  const { setGuestConfirmation } = useCart()
  const { register, handleSubmit, formState: { errors } } = useForm<GuestInputs>({
    resolver: yupResolver(confirmationSchema),
  })

  const onSubmit: SubmitHandler<GuestInputs> = async (data) => {
    setGuestConfirmation(data)
    try {
      setLoading(true)
      const res = await api.post('/api/guest', data)
      if (res.status === 201) {
        setLoading(false)
        setSucess(true)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Loading message='Estamos confirmando sua presença' />
  if (success) return <Success />

  return (
    <form
      className='flex flex-col gap-6 w-full'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='text-start'>
        <label htmlFor='name' className='block text-start mb-2'>Nome</label>
        <input
          className='border border-blue-100 w-full rounded-sm p-2 px-4 text-[1rem]'
          {...register("name")}
          placeholder='Digite seu nome completo'
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </div>

      <div>
        <p className='text-start mb-5'>Quantos acompanhantes?</p>
        <div className='flex items-center gap-7'>
          <label htmlFor='name' className='block text-start'>Adultos</label>
          <input
            type='number'
            className='border border-blue-100 rounded-sm p-2 px-4 text-[1rem] w-15'
            defaultValue={0}
            min={0}
            max={10}
            {...register("escorts")}
          />
        </div>
      </div>
      <Button>confirmar presença</Button>
    </form>
  )
}

export default GuestForm
