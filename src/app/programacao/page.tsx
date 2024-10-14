import React from 'react'
import Flower from '../_components/Flower'
import TextScript from '../_components/TextScript'
import Image from 'next/image'
import Link from 'next/link'


const Schedule = () => {
  return (
    <section className='px-5 py-20 w-full flex flex-col gap-10 items-center justify-center relative min-h-screen'>

      <Flower
        src="/flor.png"
        className="absolute lg:w-[40vw] lg:top-[-20px] lg:left-[-80px] w-[50vw] top-[0] left-[-20px]"
      />
      <div className="w-full md:w-[600px] text-center flex flex-col gap-5 items-center px-5">
        <Image
          src="/brasao.png"
          alt='igreja'
          width={200} 
          height={200}
        />
        <div>
          <p className='text-[1.8rem] uppercase pb-4'>confira a</p>
          <TextScript>programação</TextScript>
        </div>
        <p>Fique por dentro dos horários para não perder nada desse dia especial.</p>

        <ul className='flex flex-col gap-5 text-sm my-5'>
          <li>
            <h2 className='font-semibold'>20h - Cerimônia</h2>
            <p>A Cerimônia acontecerá na Paróquia de Santo Antônio de Pádua, Olho d&apos;Água das Flores - AL</p>
            <a className='w-full text-sm text-blue-700' target='_blank' rel='noopener noreferrer' href='https://www.google.com/maps/place/Igreja+Matriz+Santo+Ant%C3%B4nio+de+P%C3%A1dua/@-9.5362231,-37.2967366,17z/data=!3m1!4b1!4m6!3m5!1s0x70602832ed7dac1:0x15fd862d218cc9fa!8m2!3d-9.5362231!4d-37.2941617!16s%2Fg%2F11c37jhtfd?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D'>Ver no mapa</a>
          </li>
          <li>
            <h2 className='font-semibold'>22h30 - Recepção</h2>
            <p>A recepção será no Espaço Celebrar <Link className='text-blue-700' href={"https://www.instagram.com/celebrarfestaseeventoss/"}>@celebrarfestaseeventoss</Link> localizado na AL 130, 9925, Olho d&apos;Água das Flores - AL</p>
            <Link className='w-full text-sm text-blue-700' target='_blank' rel='noopener noreferrer' href='https://www.google.com/maps/place/CELEBRAR+FESTAS+E+EVENTOS/@-9.4802354,-37.2794856,15z/data=!4m6!3m5!1s0x7061d6df14ac49f:0x4d1d78e98c55729f!8m2!3d-9.4802354!4d-37.2794856!16s%2Fg%2F11cs013b64?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'>Ver no mapa</Link>
          </li>
          <li>
            <h2 className='font-semibold'>Atrações</h2>
            <p>A animação ficará por conta das bandas: </p>
            <p>Ítalo Barbosa  <Link className='w-full text-sm text-blue-700' target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/italobarbosa_/">@italobarbosa_</Link> </p>
            <p>Lourenzo e Banda L4  <Link className='w-full text-sm text-blue-700' target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/p/C66lc5gA1w-/">@bandal4oficial</Link> </p>
            <p>Regis Bakana  <Link className='w-full text-sm text-blue-700' target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/p/CcQPqWOFWFU/">@regisbakanaoficial</Link> </p>
           
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Schedule
