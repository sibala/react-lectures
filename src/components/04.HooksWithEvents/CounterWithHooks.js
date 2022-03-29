import React, { useState } from 'react'

function CounterWithHooks() {
    const [count, setCount] = useState(0);
    /**
     * Rules of Hooks
     * 
     * 1. Only call Hooks at the top level. 
     * Don’t call Hooks inside loops, conditions, or nested functions.
     * 
     * 2. Only call Hooks from React function components. 
     * Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks. 
     * We’ll learn about them in a moment.)
     */
    const increment = () => {
        setCount(count + 1);
    }

    /**
     * setCount is asynchronous
     * setCount groups multiple setCount calls to a single update, for better performance.
     * Meaning its better to calculate based on the previous state, when incrementing multiple times simultaneously
     */
    const incrementByThree = () => {
        // Wont work, will only increment by 1
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        for (let i = 1; i <= 3; i++) {
            setCount( (prevCount) => prevCount + 1);
        }
    }
    
    return (
        <div>
            <p>Counter with Hooks: {count}</p>
            <button onClick={increment}>Increment by 1</button>
            <button onClick={incrementByThree}>Increment by 3</button>
        </div>
    )
}

export default CounterWithHooks