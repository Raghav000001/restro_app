import  { useState } from 'react'
import AccordianBody from './AccordianBody'
import { HiChevronDown } from "react-icons/hi";

const Accordian = ({categoryName,items,open,setOpenIndex}) => {
  
    const handleClick = ()=> {
          setOpenIndex()     
    }

  return (
    <div className='border mb-5'>
        <div key={categoryName} className="mt-4 flex justify-between bg-white border" onClick={handleClick} >
            <h2 className="text-lg font-semibold">{categoryName}  <span className="text-lg font-semibold">({items.length})</span> </h2>
            <HiChevronDown />
          </div>
            {
                open &&  <AccordianBody items = {items} />
            }
    </div>
  )
}

export default Accordian
