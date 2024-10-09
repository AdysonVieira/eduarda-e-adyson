import React from 'react'
import Image from 'next/image'
import { Clock, Copy } from 'lucide-react'
import { PixQrCodeResponse } from '@/services/CheckoutPixService'
import Button from '@/app/_components/Button'

interface PixInfoProps {
  pixData: PixQrCodeResponse | undefined
}


const PixInfo = ({ pixData }:PixInfoProps ) => {
  const [buttonLabel, setButtonLabel] = React.useState<string>('Copiar');

  const handleClick = (text: string) => {
    navigator.clipboard.writeText(text)
    .then(() => setButtonLabel('Copiado'))
    .catch(err => console.error('Erro ao copiar o texto: ', err))
  }

  if (pixData)
  return (
    <div className='w-full flex flex-col justify-center items-center gap-5 md:w-[600px] px-5'>
      <div className='bg-yellow-50 border text-yellow-950 p-5 w-full rounded-lg text-center flex flex-col items-center gap-2'>
        <Clock />
        <h1 className='uppercase'>Aguardando pagamento</h1>
        <span className='text-[0.75rem]'>Essa chave expirará em 2 horas</span>
      </div>
      <Image src={`data:image/png;base64,${pixData.encodedImage}`} alt='QrCode' width={200} height={200} />
      <div className='border flex w-full items-center rounded-lg'>
        <span className='truncate p-2'>{pixData?.payload}</span>
        <Button onClick={() => handleClick(pixData?.payload)} className='flex items-center justify-center gap-2'><Copy /> {buttonLabel}</Button>
      </div>
      <ul className='flex flex-col gap-3 text-start text-[0.75rem]'>
        <li>1. Copie a chave Pix acima</li>
        <li>2. Abra o app do seu banco e faça o pagamento usando a opção Pix Copia e Cola</li>
        <li>3. Cole o chave e finalize o pagamento, em alguns minutos seu pagamento será confirmado</li>
      </ul>
    </div>
  )
}

export default PixInfo
