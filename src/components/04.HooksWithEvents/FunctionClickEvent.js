import React from 'react'

function FunctionClickEvent() {

    const handleClick = (e) => {
        console.log('Function button click');
        console.log(e);             // Retrieve the event
        console.log(e.target);      // Retrieve the element, associated with the event
    }

    return (
        <div>
            <button onClick={handleClick}> Click me</button>
        </div>
    )
}

export default FunctionClickEvent