// "rfce" creates a function component
import React from 'react'

const user = {
    firstname: 'John',
    lastname: 'Doe'
}

function formatName(user) {
    return user.firstname + ' ' + user.lastname;
}

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);


function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

// Elements in array
let elements = [];
for (let i = 1; i <= 5; i++) {
    elements.push(i);
}
console.log(elements);


/**
 * General rules 
 *  - JSX uses camelCase property naming convention instead of HTML attribute names. Meaning "onClick" instead of "onclick"
 *  - HTML classes are defined with the keyword className, in JSX
 *  - If a tag is empty, you may close it immediately with />, like XML
 *  - If a tag has only a start-tag (like <img>), then you must close it immediately with /> (<img />).
 *  - JSX tags may contain children. BUT, only one main tag/element may be returned, for every component
 *  - JSX Prevents Injection Attacks
 */
const Jsx = () => {
    return (
        <div className="wrapper" >
    
            {/* Display plain text */}
            Hej från underkomponenten Jsx

            {/* Display content through a variable */}
            {element} 

            {/* Display content through a function */}
            {getGreeting(false)}

            {/* Displays elements through looping an array */}
            <ul>
                { 
                    elements.map( element => {
                        return <li>{element}</li>;
                    })
                }
            </ul>
        </div>
    )
}

export default Jsx