'use client'
import React from 'react'
import ErrorMessage from '@/app/_components/ErrorMessage'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { IMaskInput } from 'react-imask'
import { useCart } from '@/hooks/useCart'
import { PaymentGuestDataInputs, PaymentGuestDataSchema } from '../_schema/PaymentGuestDataSchema'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Button from '@/app/_components/Button'

const PaymentGuestDataForm = () => {
  const { gift, setPaymentGuestData } = useCart()
  const streetRef = React.useRef<HTMLInputElement>(null)
  const cityRef = React.useRef<HTMLInputElement>(null)
  const stateRef = React.useRef<HTMLInputElement>(null)
  const router = useRouter()

  const { register, handleSubmit, control, watch, formState: { errors } } = useForm<PaymentGuestDataInputs>({
    resolver: yupResolver(PaymentGuestDataSchema)
  })

  const onSubmit: SubmitHandler<PaymentGuestDataInputs> = async (data) => {
    setPaymentGuestData(data)
  }

  const postalCode = watch('postalCode')

  React.useEffect(() => {
    const fetchPostalCode = async () => {
      if (postalCode && postalCode.length === 9) {
        const sanitizePostalCode = postalCode.replace(/[^\d]/g, '')
        const res = await axios.get(`https://api.brasilaberto.com/v1/zipcode/${sanitizePostalCode}`)
        const { street, city, state } = res.data.result
        streetRef.current!.value = street
        cityRef.current!.value = city
        stateRef.current!.value = state
      }
    }

    fetchPostalCode()
  }, [postalCode])

  if (!gift) router.push('/presentes')

  return (
    <div className="w-full md:w-[600px] text-center px-5">
      <div className='w-full flex flex-col gap-5 '>
        <div className='bg-blue-50 p-5 w-full border border-blue-100 rounded-lg'>
          <h1 className='uppercase'>Dados Pessoais</h1>
          <p>Informe os dados do titular do cartão</p>
        </div>
        <form
          className='w-full flex flex-col gap-5 items-center'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='text-start w-full'>
            <label htmlFor='name' className='block text-start mb-1'>Nome</label>
            <input
              {...register("name")}
              id='name'
              type='text'
              className='border border-blue-100 w-full rounded-sm p-2 px-4 text-[1rem]'
              placeholder='Digite seu nome completo'
            />

            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>

          <div className='text-start w-full'>
            <label htmlFor='cpfCnpj' className='block text-start mb-1'>CPF</label>
            <Controller
              name='cpfCnpj'
              control={control}
              render={({ field }) => (
                <IMaskInput
                  {...field}
                  id='cpfCnpj'
                  type='text'
                  className='border border-blue-100 w-full rounded-sm p-2 px-4 text-[1rem]'
                  placeholder='000.000.000-00'
                  mask={"000.000.000-00"}
                />
              )}
            />
            {errors.cpfCnpj && <ErrorMessage>{errors.cpfCnpj.message}</ErrorMessage>}
          </div>

          <div className='text-start w-full'>
            <label htmlFor='email' className='block text-start mb-1'>Email</label>
            <input
              {...register("email")}
              id='email'
              type='email'
              className='border border-blue-100 w-full rounded-sm p-2 px-4 text-[1rem]'
              placeholder='nome@email.com'
            />

            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </div>

          <div className='text-start w-full'>
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
                  placeholder='(99) 99999-0000'
                  mask={"(00) 00000-0000"}
                />
              )}
            />
            {errors.mobilePhone && <ErrorMessage>{errors.mobilePhone.message}</ErrorMessage>}
          </div>

          <div className='text-start w-full'>
            <label htmlFor='postalCode' className='block text-start mb-1'>CEP</label>
            <Controller
              name='postalCode'
              control={control}
              render={({ field }) => (
                <IMaskInput
                  {...field}
                  id='postalCode'
                  type='text'
                  className='border border-blue-100 w-full rounded-sm p-2 px-4 text-[1rem]'
                  placeholder='00000-000'
                  mask={"00000-000"}
                />
              )}
            />
            {errors.postalCode && <ErrorMessage>{errors.postalCode.message}</ErrorMessage>}
          </div>

          <div className='text-start w-full'>
            <label htmlFor='street' className='block text-start mb-1'>Endereço</label>
            <input
              ref={streetRef}
              id='street'
              type='text'
              className='border border-blue-100 w-full rounded-sm p-2 px-4 text-[1rem]'
            />
          </div>

          <div className='text-start w-full'>
            <label htmlFor='addressNumber' className='block text-start mb-1'>Número</label>
            <input
              {...register('addressNumber')}
              id='addressNumber'
              type='text'
              className='border border-blue-100 w-full rounded-sm p-2 px-4 text-[1rem]'
            />
          </div>

          <div className='text-start w-full'>
            <label htmlFor='city' className='block text-start mb-1'>Cidade</label>
            <input
              ref={cityRef}
              id='city'
              type='text'
              className='border border-blue-100 w-full rounded-sm p-2 px-4 text-[1rem]'
            />
          </div>

          <div className='text-start w-full'>
            <label htmlFor='state' className='block text-start mb-1'>Estado</label>
            <input
              ref={stateRef}
              id='state'
              type='text'
              className='border border-blue-100 w-full rounded-sm p-2 px-4 text-[1rem]'
            />
          </div>
          <Button>continuar</Button>
        </form>
      </div>
    </div>
  )
}

export default PaymentGuestDataForm