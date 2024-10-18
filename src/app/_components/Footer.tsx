import { Heart } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-between w-full items-center bg-blue-50 p-5 border-blue-200 border-t text-[10px] text-blue-400'>
      <span>Todos os direitos reservados.</span>
      <span className='flex items-center gap-1'>Desenvolvido com <Heart size={12}/> por Adyson Vieira.</span>
    </footer>
  )
}

export default Footer
