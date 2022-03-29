import React from 'react'

function Greeting({ isLoggedIn }) {
    /**
     * Version 2
     */
    // let greeting = '';
    // if (isLoggedIn) {
    //     greeting = 'Welcome Mr. John Doe';
    // } else {
    //     greeting = 'Please login';
    // }

    /**
     * Version 3 - Refactor with ternary operation
     */
    return (
        <h1>
            {
                isLoggedIn
                    ? 'Welcome Mr. John Doe'
                    : 'Please login'
            }
        </h1>
    )
}

export default Greeting