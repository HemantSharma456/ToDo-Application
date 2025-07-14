import React from 'react'
import { useState , useEffect } from 'react'
import Tasks from './Tasks';

const InputTodo = () => {

  const[task ,setTask] = useState([]);
  const[input,setInput] = useState('');
 
  const sub = (e)=>{
    e.preventDefault();
    setTask([...task,input]);
    setInput("");
}

  useEffect(()=>{
    console.log(task);
  } , [task]);

  const del = (index)=>{
    const newTask = task.filter((i)=>i!==index)
    setTask(newTask);
  }

  return (
    <section className='flex flex-col'>
        <div>
            <form className='flex items-center justify-center p-6' onSubmit={sub}>
                <label className='text-xl'>Add a Task: </label>
                <input type='text' className='ml-4 rounded-lg shadow-md'
                        value={input}
                        onChange={(e)=>{setInput(e.target.value)}}
                />
                <div className='block'>
                     <button className='text-sm ml-2 bg-[#ADEED9] px-1 py-2 rounded-lg shadow-md hover:font-bold'>Add</button>
               </div>
            </form>
        </div>
        <div className='space-y-2'>
            {task.map((t,index)=>(
                <Tasks task={t} del={del} index={index}/>     
            ))}
        </div>
    </section>
  )
}

export {InputTodo as default};