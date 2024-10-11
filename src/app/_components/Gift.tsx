import React from 'react'
import TextScript from './TextScript'
import Button from '@/app/_components/Button'
import Link from 'next/link'

const Gift = () => {
  return (
    <section className='px-5 py-20 w-full flex flex-col gap-10 items-center justify-center relative'>
      <div className="md:w-[40vw] text-center flex flex-col gap-5">
        <div>
          <p className='text-[1.8rem] uppercase pb-4'>nossa lista de</p>
          <TextScript>presentes</TextScript>
        </div>
        <p>Fique à vontade para nos presentear, confira nossa lista de sugestões</p>
        <Link href={"/presentes"}>
          <Button>Lista de presentes</Button>
        </Link>
      </div>
    </section>
  )
}

export default Gift