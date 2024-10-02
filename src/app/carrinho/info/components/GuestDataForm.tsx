'use client'
import React from 'react'
import ErrorMessage from '@/app/_components/ErrorMessage'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { GuestDataInputs, GuestDataSchema } from '../schema/GuestDataSchema'
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
    <div className="w-full md:w-[400px] text-center flex flex-col gap-5 items-center px-5">
      <h1>Informações Pessoais</h1>
      <form
        className='w-full flex flex-col gap-5'
        onSubmit={handleSubmit(onSubmit)}
        >
        <div className='text-start'>
          <label htmlFor='name' className='block text-start'>Nome</label>
            <input
              {...register("name")}
              className='border-1 ring-1 border-blue-950 w-full rounded-sm px-2 py-1 text-[1rem]'
              placeholder='Digite seu nome completo'
            />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </div>

        <div className='text-start'>
          <label htmlFor='cpfCnpj' className='block text-start'>CPF</label>
          <Controller
            name='cpfCnpj'
            control={control}
            render={({field}) => (
              <IMaskInput
                {...field}
                id='cpfCnpj'
                type='text'
                className='border-1 ring-1 border-blue-950 w-full rounded-sm px-2 py-1 text-[1rem]'
                placeholder='Apenas números'
                mask={"000.000.000-00"}
                />
            )}
          />
          {errors.cpfCnpj && <ErrorMessage>{errors.cpfCnpj.message}</ErrorMessage>}
        </div>

        <div className='text-start'>
          <label htmlFor='mobilePhone' className='block text-start'>Celular</label>
            <Controller
              name='mobilePhone'
              control={control}
              render={({ field }) => (
                <IMaskInput
                  {...field}
                  id='mobilePhone'
                  type='tel'
                  className='border-1 ring-1 border-blue-950 w-full rounded-sm px-2 py-1 text-[1rem]'
                  placeholder='Apenas números'
                  mask={"(00) 00000-0000"}
                />
              )}
            />
          {errors.mobilePhone && <ErrorMessage>{errors.mobilePhone.message}</ErrorMessage>}
        </div>
        <div className='text-start'>
          <label htmlFor='message' className='block text-start'>Messagem</label>
          <textarea
            {...register('message')}
            className='border-1 ring-1 border-blue-950 w-full rounded-sm px-2 py-1 text-[1rem]'
            placeholder='Se preferir, deixenos uma mensagem'
            rows={5} />
          {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
        </div>
        <Button>ir para pagamento</Button>
      </form>
    </div>
  )
}

export default GuestDataForm
