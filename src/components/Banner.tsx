import { HTMLProps } from "react";

interface bannerProps extends HTMLProps<HTMLDivElement> {
  theme?: "100" | "200" | "300"
}


const Banner = ({theme='100', children, className, ...props} : bannerProps) => {

  const color : {[index:string] : string} = {
    "100" : "bg-primary-100",
    "200" : "bg-primary-200",
    "300" : "bg-primary-300",
  }

  return (
    <div 
      className={`
        w-fit h-fit flex justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden px-2 py-1 rounded-3xl text-white text-lg font-semibold cursor-default
        ${color[theme]} ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
};

export default Banner;