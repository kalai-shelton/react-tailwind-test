import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount]=useState(0)
    const handleClick = ()=>{
        setCount(count+1)
    }
  return (
    <div className='flex flex-col justify-center h-40vh'>
        {count}
        <div>
       <button className='border-4 rounded-md border-red-400 focus:border-green-400' onClick={handleClick}>Increase</button> 
       </div>
    </div>
  )
}

export default Counter