'use client'

// This is Client Component
// We write 'use client' to make file or component. client 

import { useState } from "react"

function Counter() {
const [count, setCount] = useState(0)

const handleClick = ()=>{
    setCount(count+1)
}
  return (
    <div>
       <h1>Count is {count}</h1>
        <button className={'bg-white text-black'} onClick={handleClick}>Update</button>
    </div>
  )
}

export default Counter