import React from 'react'
import TextScript from './TextScript'
import Button from '@/app/_components/Button'
import Link from 'next/link'

const Confirmation = () => {
  return (
    <section className='px-5 py-20 w-full flex flex-col gap-10 items-center justify-center relative'>
      <div className="md:w-[40vw] text-center flex flex-col gap-5">
        <div>
          <p className='text-[1.8rem] uppercase pb-4'>confirme sua</p>
          <TextScript>presença</TextScript>
        </div>
        <p>Aguardamos sua confirmação até o dia 14 de novembro</p>
        <Link href={"/confirmacao"}>
          <Button>Confirme aqui</Button>
        </Link>
      </div>
    </section>
  )
}

export default Confirmation
