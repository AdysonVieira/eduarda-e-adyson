import React from 'react'
import TextScript from './TextScript'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Gift = () => {
  return (
    <section className='px-5 py-20 w-full flex flex-col gap-10 items-center justify-center relative'>
      <div className="max-w-[50vw] text-center flex flex-col gap-5">
        <div>
          <p className='text-[1.8rem] uppercase pb-4'>nossa lista de</p>
          <TextScript>presentes</TextScript>
        </div>
        <p>Fique à vontade para nos presentear, confira nossa lista de sugestões</p>
        <Link href={"/presentes"}>
          <Button className='bg-blue-500 text-blue-100 w-full uppercase' variant="default">Lista de presentes</Button>
        </Link>
      </div>
    </section>
  )
}

export default Gift