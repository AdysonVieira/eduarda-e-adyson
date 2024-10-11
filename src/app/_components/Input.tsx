import { ForwardedRef, forwardRef, HTMLAttributes, InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { twMerge } from "tailwind-merge";

export type InputProps = {
  label: string;
  className: string;
} & InputHTMLAttributes<HTMLInputElement> 

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, type, name, className, ...rest }, ref) => {
  return (
    <div>
      <label htmlFor={name} className='block text-start'>{label}</label>
      <input
        type={type}
        name={name}
        ref={ref}
        {...rest}
        className={twMerge(`border-1 ring-1 border-blue-950 w-full rounded-sm px-2 py-1 text-[1rem]`, className)}
        />
    </div>
  )
})

Input.displayName = "Input"