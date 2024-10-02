'use client'

import React, { FormEvent } from 'react'
import { useCart } from '@/hooks/useCart'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Heart } from 'lucide-react'
import Button from '@/app/_components/Button'

const ToGift = () => {
  const { gift, setMessage } = useCart()
  const ref = React.useRef<HTMLTextAreaElement | null>(null)
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage(ref.current?.value)
    router.push('/presentear/pagamento')
  }

  if (gift) return (
    <div className='flex flex-col justify-center items-center bg-blue-50 min-h-[100vh] w-full'>

      <div className="w-full md:w-[400px] text-center flex flex-col gap-5 items-center px-5">
        <Image
          src="/brasao.png"
          alt='igreja'
          width={200}
          height={200}
        />
        <h1 className='uppercase text-[1.5rem] flex items-center gap-2'>Amamos sua escolha <Heart /></h1>

        <div className='flex justify-center items-center gap-5 bg-blue-100 p-5 rounded-lg w-full'>

          <Image
            className='object-cover aspect-square rounded-md'
            src={gift.imgUrl}
            alt={gift.name}
            width={80}
            height={80}
          />
          <p>{gift.name}</p>
        </div>
        <form
          className='flex flex-col w-full gap-5'
          onSubmit={handleSubmit}>
          <textarea
            ref={ref}
            className='border-1 ring-1 border-blue-950 w-full rounded-sm px-2 py-1 text-[1rem]'
            name="message"
            id="message"
            placeholder='Se preferir, deixenos uma mensagem'
            rows={5} />
          <Button>ir para pagamento</Button>
        </form>
      </div>
    </div>
  )

  return router.push("/presentes")
}

export default ToGift
