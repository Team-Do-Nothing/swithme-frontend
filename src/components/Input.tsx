import { HTMLProps } from "react";

const Input = ( {className, ...props} : HTMLProps<HTMLInputElement>) => {
  return(
    <input className={`rounded-lg border-2 border-primary-100 focus:outline-none ${className} px-2 py-1`} {...props}/>
  )
}

export default Input;