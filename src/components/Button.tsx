'use client'

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme? : "100" | "200" | "300",
  size? : "sm" | "md" | "lg",
}

const Button = ({theme="100", size="md", className, children, ...props} : props) => {

  const themes : {[content:string] : {[index:string] : string}} = {
    "size" : {
      "sm" : "px-2 py-1 text-sm",
      "md" : "px-4 py-2 text-xl",
      "lg" : "px-6 py-3 text-3xl"
    }, 
    "color" : {
      "100" : "bg-primary-100 hover:bg-primary-100/80",
      "200" : "bg-primary-200 hover:bg-primary-200/80",
      "300" : "bg-primary-300 hover:bg-primary-300/80",
    }
  }

  return(
    <button {...props} className={`w-fit h-fit flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-xl text-white font-semibold ${themes["size"][size]} ${themes["color"][theme]} ${className}`}>
      {children}
    </button>
  )
}

export default Button;