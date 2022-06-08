import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = (count) => {
        setCount(count + 1)
    }
    return ( 
        <>
        <div>
            <button 
                className='counter' 
                onClick={() => increment(count)}
            >
                Click me!
            </button>
        </div>
        <div>
            <h1>Current Count: {count}</h1>
        </div>
        </>
     );
}
 
export default Counter;