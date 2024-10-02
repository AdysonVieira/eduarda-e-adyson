'use client'
import React from 'react'
import ErrorMessage from '@/app/_components/ErrorMessage'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@/components/ui/button'
import { IMask, IMaskInput } from 'react-imask'
import { useCart } from '@/hooks/useCart'
import { PaymentDataInputs, PaymentDataSchema } from '../schema/PaymentDataSchema'
import { useRouter } from 'next/navigation'
import { formatCurrency } from '@/helpers/formatCurrency'

const PaymentDataForm = () => {
  const { gift } = useCart()
  const router = useRouter()
  const { register, handleSubmit, control, formState: { errors } } = useForm<PaymentDataInputs>({
    resolver: yupResolver(PaymentDataSchema)
  })
  const onSubmit: SubmitHandler<PaymentDataInputs> = (data) => {
    console.log(data)
  }
  if (!gift) return router.push('/presentes')
  return (
    <div className="w-full md:w-[400px] text-center flex flex-col gap-5 items-center px-5">
      <h1>Informações de Pagamento</h1>
      <form
        className='w-full flex flex-col gap-5'
        onSubmit={handleSubmit(onSubmit)}
        >
        <div className='text-start'>
          <label htmlFor='credit-card-number' className='block text-start'>Número do cartão</label>
          <Controller
            name='creditCardNumber'
            control={control}
            render={({ field }) => (
              <IMaskInput
                {...field}
                id='credit-card-number'
                type='text'
                className='border-1 ring-1 border-blue-950 w-full rounded-sm px-2 py-1 text-[1rem]'
                placeholder='Apenas números'
                mask={[
                  {
                    mask: "0000 000000 0000",
                    maxLength: 14
                  },
                  {
                    mask: "0000 000000 00000",
                    maxLength: 15
                  },
                  {
                    mask: "0000 0000 0000 0000",
                    maxLength: 16
                  },
                ]}
              />
            )}
            />
         
          {errors.creditCardNumber && <ErrorMessage>{errors.creditCardNumber.message}</ErrorMessage>}
        </div>

        <div className='text-start'>
          <label htmlFor='cc-holdername' className='block text-start'>Nome </label>
            <input
              {...register("creditCardHolder")}
              id='cc-holdername'
              type='text'
              className='border-1 ring-1 border-blue-950 w-full rounded-sm px-2 py-1 text-[1rem]'
              placeholder='Como está impresso no cartão'
            />
          
          {errors.creditCardHolder && <ErrorMessage>{errors.creditCardHolder.message}</ErrorMessage>}
        </div>
        <div className=' flex gap-5'>
          <div className='text-start'>
            <label htmlFor='cc-expiration' className='block text-start'>{`Validade (MM/AA)`}</label>
              <Controller 
                name='creditCardExpiration'
                control={control}
                render={({ field }) => (

                  <IMaskInput
                  {...field}
                  id='cc-expiration'
                  type='text'
                  className='border-1 ring-1 border-blue-950 w-full rounded-sm px-2 py-1 text-[1rem]'
                  placeholder='MM/AA'
                  mask={[
                    {
                      mask: 'MM/YY',
                      blocks: {
                        MM: {
                          mask: IMask.MaskedRange,
                          from: 1,
                          to: 12, 
                        },
                        YY: {
                          mask: IMask.MaskedRange,
                          from: new Date().getFullYear() - 2000,
                          to: 99,
                        },
                      },
                    },
                  ]}
                  />
                )} 
                
              />
              {errors.creditCardExpiration && <ErrorMessage>{errors.creditCardExpiration.message}</ErrorMessage>}
          </div>

          <div className='text-start'>
            <label htmlFor='cc-cvv' className='block text-start'>CVV</label>
            <Controller
              name='creditCardSecurityCode'
              control={control}
              render={({ field }) => (
                <IMaskInput
                  {...field}
                  id='cc-cvv'
                  type='text'
                  className='border-1 ring-1 border-blue-950 w-full rounded-sm px-2 py-1 text-[1rem]'
                  mask={[
                    {
                      mask: '000'
                    },
                    {
                      mask: '0000'
                    },
                  ]}
                />
              )}
            />
            {errors.creditCardSecurityCode && <ErrorMessage>{errors.creditCardSecurityCode.message}</ErrorMessage>}
          </div>
        </div>
        <div>
          <select className='border-1 ring-1 border-blue-950 w-full rounded-sm px-2 py-1 text-[1rem]' {...register('installmentCount')}>
            <option value={1} selected>{`1x de ${formatCurrency(gift?.price)}`}</option>
            <option value={2}>{`2x de ${formatCurrency(gift?.price / 2)}`}</option>
            <option value={3}>{`3x de ${formatCurrency(gift?.price / 3)}`}</option>
          </select>
        </div>
        <Button className='bg-blue-500 text-blue-100 w-full uppercase' variant="default">ir para pagamento</Button>
      </form>
    </div>
  )
}

export default PaymentDataForm