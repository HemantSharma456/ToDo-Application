import React from 'react'
import { useState } from 'react'

const Tasks = ({task , del, index}) => {

  const[done,setDone] = useState(false);

  const handleDone = ()=>{
    setDone(true)
  }

  const handleDel = ()=>{
     del(index);   
  }
    
  return (
    <div className='flex items-center justify-center'>
        <div className='bg-white p-3 w-[400px] rounded-lg shadow-md ml-6'>
            <div className='flex justify-between'>
                <p className={`font-semibold ${done?'line-through text-gray-500' : ""}`}>{task}</p>
                <div className='space-x-3'>
                      <button onClick={handleDone} className='hover:font-bold text-blue-500 text-sm font-semibold rounded-lg'>Done</button>
                      <button onClick={handleDel} className='hover:font-bold text-red-500 text-sm font-semibold rounded-lg'>Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tasks