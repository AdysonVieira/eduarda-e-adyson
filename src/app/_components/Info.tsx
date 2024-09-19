import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Flower from './Flower'
import { corinthia, fraunces } from '../layout'
import TextScript from './TextScript'

const Info = () => {
  return (
    <section className='bg-blue-100 px-5 py-20 w-full flex flex-col gap-20 items-center justify-center relative'>
      <Flower
        src="/flor.png"
        className="lg:w-[40vw] lg:top-[-200px] lg:right-[-80px] w-[50vw] top-[-50px] right-[-20px] z-10 rotate-180"
      />

      <Flower
        src="/flor.png"
        className="lg:w-[40vw] lg:top-[95%] lg:left-[-80px] w-[50vw] top-[95%] left-[-20px] z-10"
      />

      <div className=' text-center'>
        <p className={`${fraunces.className} text-[10rem]`}>23</p>
        <TextScript>novembro</TextScript>
        <p className={`${fraunces.className} text-[2rem]`}>2024</p>
      </div>
      
      <div className='bg-blue-50 h-[30rem] p-5 max-w-[20rem] flex flex-col items-center justify-between rounded-tl-full rounded-tr-full rounded-bl-md rounded-br-md text-center'>
        <Image
          src="/igreja.svg"
          alt='igreja'
          width={150} 
          height={150}
        />
        <p>Adoraríamos que fizessem parte desse momento especial</p>
        <div>
          <p className={`${fraunces.className} text-[2rem]`}>20h</p>
          <p className='text-xs'>Paróquia de Santo Antônio de Pádua</p>
          <p className='text-xs'>{"Olho d'Água das Flores"}</p>
        </div>
        <a className='w-full' target='_blank' rel='noopener noreferrer' href='https://www.google.com/maps/place/Igreja+Matriz+Santo+Ant%C3%B4nio+de+P%C3%A1dua/@-9.5362231,-37.2967366,17z/data=!3m1!4b1!4m6!3m5!1s0x70602832ed7dac1:0x15fd862d218cc9fa!8m2!3d-9.5362231!4d-37.2941617!16s%2Fg%2F11c37jhtfd?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D'>
          <Button className='bg-blue-500 text-blue-100 w-full uppercase' variant="default">ver no mapa</Button>
        </a>
      </div>
    </section>
  )
}

export default Info
