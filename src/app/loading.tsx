import React from 'react'
import { ImSpinner8 } from "react-icons/im";

const loading = () => {
  return (
    <div className=' h-full w-full mx-auto flex items-center justify-center'>
        <ImSpinner8  className=' animate-spin ' size={20}/>
    </div>
  )
}

export default loading