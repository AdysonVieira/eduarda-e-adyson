import * as React from 'react';

interface ITitleProps {
  children: React.ReactNode
}

const Title: React.FunctionComponent<ITitleProps> = ({ children }: ITitleProps) => {
  return (
    <h1 className='md:text-[5rem] sm:text-[3rem] text-[2rem]'>{children}</h1>
  );
};

export default Title;
