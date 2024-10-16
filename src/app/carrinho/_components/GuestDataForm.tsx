'use client'
import React from 'react'
import ErrorMessage from '@/app/_components/ErrorMessage'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { GuestDataInputs, GuestDataSchema } from '../_schema/GuestDataSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '@/app/_components/Button'
import { IMaskInput } from 'react-imask'
import { useCart } from '@/hooks/useCart'
import { useRouter } from 'next/navigation'

const GuestDataForm = () => {
  const { setGuestData } = useCart()
  const router = useRouter()

  const { register, control, handleSubmit, formState: { errors } } = useForm<GuestDataInputs>({
    resolver: yupResolver(GuestDataSchema)
  })
  const onSubmit: SubmitHandler<GuestDataInputs> = (data) => {
    setGuestData(data)
    router.push('/carrinho/pagamento')
  }

  return (
    <div className="w-full text-center flex flex-col items-center gap-5">
      <div className='bg-blue-50 p-5 w-full border border-blue-100 rounded-lg'>
        <h1 className='uppercase'>Preencha seus dados e deixe uma mensagem</h1>
      </div>
      <form
        className='w-full flex flex-col gap-5'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='text-start'>
          <label htmlFor='name' className='block text-start mb-1'>Nome</label>
          <input
            {...register("name")}
            className='border border-blue-100 w-full rounded-sm p-2 px-4 text-[1rem]'
            placeholder='Nome completo'
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </div>

        <div className='text-start'>
          <label htmlFor='mobilePhone' className='block text-start mb-1'>Celular</label>
          <Controller
            name='mobilePhone'
            control={control}
            render={({ field }) => (
              <IMaskInput
                {...field}
                id='mobilePhone'
                type='tel'
                className='border border-blue-100 w-full rounded-sm p-2 px-4 text-[1rem]'
                placeholder='Apenas números'
                mask={"(00) 00000-0000"}
              />
            )}
          />
          {errors.mobilePhone && <ErrorMessage>{errors.mobilePhone.message}</ErrorMessage>}
        </div>
        
        <div className='text-start'>
          <label htmlFor='message' className='block text-start mb-1'>Mensagem</label>
          <textarea
            {...register('message')}
            className='border border-blue-100 w-full rounded-sm p-2 px-4 text-[1rem]'
            placeholder='Se preferir, deixe-nos uma mensagem'
            rows={5} />
          {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
        </div>
        <Button>ir para pagamento</Button>
      </form>
    </div>
  )
}

export default GuestDataForm
