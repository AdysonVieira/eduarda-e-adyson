import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { confirmationSchema, GuestInputs } from '../schema/confirmationSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { setGuestConfirmation } from '@/services/api'
import ErrorMessage from '@/app/_components/ErrorMessage'
import { Button } from '@/components/ui/button'
import { CheckCircle, X } from 'lucide-react'
import Success from './Success'
import Error from './Error'

const GuestForm = () => {
  const [success, setSuccess] = React.useState<boolean>(false)
  const [failure, setFailure] = React.useState<boolean>(false)
  const { register, handleSubmit, formState: {errors} } = useForm<GuestInputs>({
    resolver: yupResolver(confirmationSchema),
  })

  const onSubmit: SubmitHandler<GuestInputs> = async (data) => {
    const res = await setGuestConfirmation(data)
    if (res === 200) return setSuccess(true)
    if (res !== 200) return setFailure(true)
  }

  if (success) return <Success />
  if (failure) return <Error onClick={setFailure}/>

  return ( 
    <form
      className='flex flex-col gap-6 w-full'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='text-start'>
        <label htmlFor='name' className='block text-start'>Nome</label>
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
        <div className='flex items-center gap-7'>
          <label htmlFor='name' className='block text-start'>Adultos</label>
          <input
            type='number' 
            className='border-1 ring-1 border-blue-950 rounded-sm px-2 py-1 text-[1rem] w-20'
            defaultValue={0}
            min={0}
            max={10}
            {...register("escorts")}
          />
        </div>
      </div>
      <Button className='bg-blue-500 text-blue-100 w-full uppercase' variant="default">confirmar presença</Button>
    </form>
  )
}

export default GuestForm
