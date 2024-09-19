import React from 'react'
import TextScript from './TextScript'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Confirmation = () => {
  return (
    <section className='px-5 py-20 w-full flex flex-col gap-10 items-center justify-center relative'>
      <div className="max-w-[50vw] text-center flex flex-col gap-5">
        <div>
          <p className='text-[1.8rem] uppercase pb-4'>confirme sua</p>
          <TextScript>presença</TextScript>
        </div>
        <p>Aguardamos sua confirmação até o dia 14 de novembro</p>
        <Link href={"/confirmacao"}>
          <Button className='bg-blue-500 text-blue-100 w-full uppercase' variant="default">Confirme aqui</Button>
        </Link>
      </div>
    </section>
  )
}

export default Confirmation
