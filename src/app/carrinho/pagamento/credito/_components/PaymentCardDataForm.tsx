'use client'
import React from 'react'
import { formatCurrency } from '@/helpers/formatCurrency'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useCart } from '@/contexts/CartContext'
import { IMask, IMaskInput } from 'react-imask'
import ErrorMessage from '@/app/_components/ErrorMessage'
import Button from '@/app/_components/Button'
import { PaymentCardDataInputs, PaymentCardDataSchema } from '../../_schema/PaymentCardDataSchema'
import { setCreditCardCheckout } from '@/services/api'
import { useRouter } from 'next/navigation'
import Loading from '@/app/_components/Loading'


const PaymentCardDataForm = () => {
  const { gift, guestData, paymentGuestData, setOrder, resetValues } = useCart();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();

  if (!gift) router.push('/presentes');

  const { register, handleSubmit, control, formState: { errors } } = useForm<PaymentCardDataInputs>({
    resolver: yupResolver(PaymentCardDataSchema)
  });

  const onSubmit: SubmitHandler<PaymentCardDataInputs> = async (data) => {
    try {
      setLoading(true)
      const paymentCardData = data;
      if (gift && guestData && paymentGuestData && paymentCardData) {
        const order = await setCreditCardCheckout(gift, guestData, paymentGuestData, paymentCardData)
        if (order.gatewayStatus === "CONFIRMED") {
          setOrder(order);
          router.push(`/success?transactionId=${order.transactionId}`)
        }
        if (order.gatewayStatus === '401' || order.gatewayStatus === '400') {
          setError('Erro ao processar pagamento')
          return
        }
        setLoading(false);
        return order
      };

    } catch (err) {
      setError('Erro ao processar pagamento, tente novamente mais tarde!')
      console.error('Erro ao processar pagamento: ', err)

    } finally {
      setLoading(false)
    };
  };

  if (loading) return <Loading message='Carregando pagamento, aguarde!' />
  if (error) return <p>{error}</p>

  return (
    <div className='w-full flex flex-col gap-5 md:w-[600px] text-center px-5'>
      <div className='bg-blue-50 p-5 w-full border border-blue-100 rounded-lg'>
        <h1 className='uppercase'>Dados do pagamento</h1>
        <p>Informe os dados do cartão</p>
      </div>

      <form
        className='flex flex-col gap-5'
        onSubmit={handleSubmit(onSubmit)}>
        <div className='text-start'>
          <label htmlFor='credit-card-number' className='block text-start mb-1'>Número do cartão</label>
          <Controller
            name='creditCardNumber'
            control={control}
            render={({ field }) => (
              <IMaskInput
                {...field}
                id='credit-card-number'
                type='text'
                className='border border-blue-100 w-full rounded-sm p-2 px-4 text-[1rem]'
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
          <label htmlFor='cc-holdername' className='block text-start mb-1'>Nome </label>
          <input
            {...register("creditCardHolder")}
            id='cc-holdername'
            type='text'
            className='border border-blue-100 w-full rounded-sm p-2 px-4 text-[1rem]'
            placeholder='Como está impresso no cartão'
          />

          {errors.creditCardHolder && <ErrorMessage>{errors.creditCardHolder.message}</ErrorMessage>}
        </div>
        <div className=' flex gap-5'>
          <div className='text-start'>
            <label htmlFor='cc-expiration' className='block text-start mb-1'>{`Validade (MM/AA)`}</label>
            <Controller
              name='creditCardExpiration'
              control={control}
              render={({ field }) => (

                <IMaskInput
                  {...field}
                  id='cc-expiration'
                  type='text'
                  className='border border-blue-100 w-full rounded-sm p-2 px-4 text-[1rem]'
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
            <label htmlFor='cc-cvv' className='block text-start mb-1'>CVV</label>
            <Controller
              name='creditCardSecurityCode'
              control={control}
              render={({ field }) => (
                <IMaskInput
                  {...field}
                  id='cc-cvv'
                  type='text'
                  className='border border-blue-100 w-full rounded-sm p-2 px-4 text-[1rem]'
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
          <label htmlFor='installmentCount' className='block text-start mb-1'>Parcelas</label>
          <select id='installmentCount' className='border border-blue-100 w-full rounded-sm p-2 px-4 text-[1rem]' {...register('installmentCount')}>
            <option value={1} defaultChecked>{`1x de ${formatCurrency(gift!.price)}`}</option>
            <option value={2}>{`2x de ${formatCurrency(gift!.price / 2)}`}</option>
            <option value={3}>{`3x de ${formatCurrency(gift!.price / 3)}`}</option>
          </select>
        </div>
        <Button>Pagar Presente</Button>
      </form>
    </div>
  );
};

export default PaymentCardDataForm;
