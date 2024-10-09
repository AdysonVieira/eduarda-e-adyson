import React from 'react'
import Image from 'next/image'
import Flower from '../_components/Flower'
import TextScript from '../_components/TextScript'



const SuccessPage = () => {
  return (
    <section className='px-5 py-20 w-full flex flex-col gap-10 items-center justify-center relative min-h-[80vh]'>

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
          <p className='text-[1.8rem] uppercase pb-4'>Pagamento confirmado</p>
          <TextScript>Obrigado</TextScript>
        </div>
        <p>Adoramos o seu presente, agradecemos de coração!</p>
        <p>Com carinho, Duda e Adyson!</p>
      </div>
    </section>
  )
}

export default SuccessPage
