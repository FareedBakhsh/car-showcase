"use client"

import { Fragment } from "react"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Listbox ,Transition } from "@headlessui/react"
import { CustomButtonProps, CustomFilterProps } from "@/type"

const CustomFilter = ({ title , options} : CustomFilterProps) => {





 /*  const [selected, setSelected] = useState(options[0]);  */






  return (

 


    <div className='w-fit'>



     <Listbox



// value={selected}
// onChange={(e) => {
//   setSelected(e); 
//    handleUpdateParams(e);
// }}





     >
      <div className='relative w-fit z-10'>
        <Listbox.Button
        className='custom-filter__btn'>
<span>  {/* { selected.title}  */}  Titles</span>

<Image   src='/lgcar.jpeg' width={20} height={20} className="rounded" alt=' lgcar'
/>
        </Listbox.Button>

<Transition
  as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
  leave='transition ease-in duration-100'
  leaveFrom='opacity-100'
  leaveTo='opacity-0'
  >
    <Listbox.Options
    className='custom-filter__options'>





{/* 
    {options.map((option) => (
                <Listbox.Options
                  key={option.title}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`} >
                        {option.title}
                      </span>
                    </>
                  )} */}








    </Listbox.Options>

</Transition>

      </div>
     </Listbox>
    </div>













  )
}

export default CustomFilter
