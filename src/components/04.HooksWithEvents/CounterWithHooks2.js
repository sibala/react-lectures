import React, {useState, useEffect} from 'react'

function CounterWithHooks2() {
    const [date, setDate] = useState(new Date());
    const [count, setCount] = useState(0);
    let timerID = ''

    const tick = () => {
        // date = new Date(); // Wont work, must update the state value through the function setDate
        setDate(new Date());
    }

    /**
     * You may think of use effect Hook as
     * componentDidMount, componentDidUpdate, componentWillUnmount combined
     */
    useEffect(() => {
        console.log('UseEffect 1')
        timerID = setInterval(
            tick,
            1000
        )

        // This returned function will be called when the component unmounts
        // Is equivalent to componentWillUnmount for Class components
        return () => {
            clearInterval(timerID);
        }
    }, []) // An empty array means this useEffect will only run once, at componentDidMount

    /**
     * You may think of use effect Hook as
     * componentDidMount, componentDidUpdate
     */
    useEffect(() => {
        console.log('UseEffect 2')
        document.title = `Counter ${count}`;
    }, [count]) // The second argument is for optimization. This useEffect will only run when count is updated


    const increment = () => {
        setCount(count + 1);
    }


    return (
        <div>
            <p>{date.toLocaleTimeString()}</p>

            <p>Counter with Hooks: {count}</p>
            <button onClick={increment}>Increment by 1</button>
        </div>
    )
}

export default CounterWithHooks2