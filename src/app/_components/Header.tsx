import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Button from './Button'
import { MenuIcon } from 'lucide-react'

const Header = () => {
  return (
    <header className='flex justify-center w-full items-end bg-blue-50 p-5 border-blue-200 border-b'>
      <div className='w-full lg:w-[1000px] flex justify-between items-center'>
        <Link href={'/'}>
          <Image
            className='object-cover aspect-square rounded-md'
            src={'/brasao.svg'}
            alt='Brasão'
            width={60}
            height={60}
            />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button className='w-10 bg-blue-50 border border-blue-200 hover:bg-blue-200'>
              <MenuIcon className='stroke-blue-950' />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <ul className='flex flex-col gap-5 uppercase'>
              <li><SheetClose asChild><Link href={'/'}><span>Home</span></Link></SheetClose></li>
              <li><SheetClose asChild><Link href={'/confirmacao'}><span>Confirmar Presença</span></Link></SheetClose></li>
              <li><SheetClose asChild><Link href={'/presentes'}><span>Lista de presentes</span></Link></SheetClose></li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
      
    </header>
  )
}

export default Header
