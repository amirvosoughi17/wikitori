import { wikiunerlineProps } from '@/types/types'
import React from 'react'

const WikiUnderLine : React.FC<wikiunerlineProps> = ({size, className , title }) => {
  return (
    <div className=' relative flex flex-col '>
        <h1 className={`${className} z-30` }>{title}</h1>
        <span className={` absolute top-5 z-0 ${size} bg-[#3a65c825]`}></span>
    </div>
  )
}

export default WikiUnderLine