import React, { ReactNode } from 'react'
import { corinthia } from '../layout';

interface ITextScriptProps {
  children: ReactNode;
}

const TextScript = ({children}: ITextScriptProps) => {
  return (
    <p className={`mt-[-2rem] text-blue-300 text-[5rem] leading-7 ${corinthia.className}`}>
      {children}
    </p>
  )
}


export default TextScript
