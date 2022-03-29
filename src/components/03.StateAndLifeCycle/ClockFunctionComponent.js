import React, { useState, useEffect } from 'react'

function ClockFunctionComponent() {
    const [date, setDate] = useState(new Date());
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
        timerID = setInterval(
            tick,
            1000
        )

        // This returned function will be called when the component unmounts
        // Is equivalent to componentWillUnmount for Class components
        return () => {
            clearInterval(timerID);
        }
    })


    return (
        <div>
            <h2>Time displayed with function component, using Hooks</h2>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    )
}

export default ClockFunctionComponent