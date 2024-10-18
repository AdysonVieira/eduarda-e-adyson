import React from 'react'
import Image from 'next/image'
import Flower from './Flower'

const MessageSection = () => {
  return (
    <section className='bg-blue-50 px-5 py-20 w-full flex flex-col gap-20 items-center justify-center relative overflow-hidden' >
      <Flower
        src="/flor.png"
        className="md:w-[40vw] md:top-[-10px] md:right-[-150px] w-[50vw] top-[50px] right-[-80px] z-0 rotate-90"
      />

      <Flower
        src="/flor.png"
        className="md:w-[40vw] md:top-[80%] md:left-[-80px] w-[50vw] top-[95%] left-[-20px] z-10"
      />
      <div className='bg-white h-[30rem] p-5 max-w-[20rem] flex flex-col items-center justify-between rounded-tl-full rounded-tr-full rounded-bl-md rounded-br-md text-center uppercase'>
        <Image
          src="/brasao.png"
          alt='igreja'
          width={200} 
          height={200}
        />
        <p>E, ACIMA DE TUDO, TENHAM AMOR,
POIS O AMOR UNE PERFEITAMENTE
TODAS AS COISAS</p>
        <div>
          <p className='text-[0.625rem] tracking-widest'>colossenses</p>
          <p className='text-[0.625rem] tracking-widest'>3:14</p>
        </div>
      </div>
    </section>
  )
}

export default MessageSection
