'use client'

import React, { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/hooks/useCart';
import GuestDataForm from './_components/GuestDataForm';
import Loading from '../_components/Loading';
import { HeartIcon } from 'lucide-react';
import GiftCardDetails from '../_components/GiftCardDetails';

const Cart = () => {
  const { gift } = useCart();
  const router = useRouter();

  if (!gift) return router.push("/presentes");
    
  return (
    <main className='flex flex-col justify-center items-center w-full py-10'>
      <div className="w-full md:w-[600px] text-center flex flex-col gap-5 items-center px-5">
        <h1 className='uppercase text-[1.5rem] flex items-center gap-2'>Adoramos sua escolha <HeartIcon /></h1>
        <Suspense fallback={<Loading className='h-[100vh]' />}>
          <GiftCardDetails />
          <GuestDataForm />
        </Suspense>
      </div>
    </main>
  );
};

export default Cart;
