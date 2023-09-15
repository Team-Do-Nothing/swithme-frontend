'use client'

import { ButtonHTMLAttributes, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

interface dropdownProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  options?: {
    text: string,
    func: () => void
  }[]
}

const Dropdown = ({ options, children, onClick, className, ...props }: dropdownProps) => {
  const [open, setOpen] = useState(false);
  const optionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-fit flex flex-col justify-center items-center gap-2">
      <button
        className={`
          w-fit h-fit flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-4 py-3 my-1 rounded-xl bg-primary-100 text-white text-xl
          ${className}
        `}
        onClick={() => { setOpen(!open) }}
        {...props}
      >
        {children}
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      <div className={`
          absolute top-full h-fit flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden rounded-xl bg-[#f1f2f3] border border-[#d9d9d9]
          ${open ? "block" : "hidden"}
      `}>
        {options?.map((el, i) => (
          <div
            key={i}
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 py-2 border-b text-xl font-semibold cursor-pointer"
            onClick={() => { el.func() }}
          >
            {el.text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dropdown;