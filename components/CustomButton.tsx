
"use client"
import Image from "next/image"
import { CustomButtonProps } from "@/type"
const CustomButton = ({title , containerStyles ,handleClick ,btnType, textStyles, rightIcon} : CustomButtonProps) => {
  return (
   <button
   
   disabled={false}
   type={ btnType || "button"}
   className={`custom-btn  hover:bg-orange-800  ${containerStyles}`}
   onClick={ handleClick}>

 <span className={`flex-1 hover:text-yellow-400 `}>
  
  {title}

 </span>

    {rightIcon && (
      <div className=" relative w-6 h-6">
     <Image src = "/right-arrow.svg"
      alt=" right Icon"
      fill
      className=" object-contain"     
     />
      </div>
    )}

   </button>
  )
}

export default CustomButton
