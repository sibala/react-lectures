import React, { useState } from 'react'
import ChildComponentButton from './ChildComponentButton';
import Greeting from './Greeting';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    const passingUpProps = (message) => {
        console.log('Login->passingUpProps()');
        console.log(message);
    }


    /**
     * Version 1 - Before refactoring
     */
    // let button = '';
    // if (isLoggedIn) {
    //     button = <button onClick={handleLogoutClick}>Logout</button>
    // } else {
    //     button = <button onClick={handleLoginClick}>Login</button>
    // }

    // let greeting = '';
    // if (isLoggedIn) {
    //     greeting = 'Welcome Mr. John Doe';
    // } else {
    //     greeting = 'Please login';
    // }

    // return (
    //     <div>
    //         <h1>{greeting}</h1>
    //         {button}
    //     </div>
    // )


    /**
     * Version 2 - Refactor to child components
     */
    // let button = '';
    // if (isLoggedIn) {
    //     button = <LogoutButton handleLogoutClick={handleLogoutClick} />
    // } else {
    //     button = <LoginButton handleLoginClick={handleLoginClick} />
    // }

    // return (
    //     <div>
    //         <Greeting isLoggedIn={isLoggedIn} />
    //         {button}
    //     </div>
    // )


    /**
     * Version 3 - Refactor with ternary operation
     */ 
     return (
         <div>
             <Greeting isLoggedIn={isLoggedIn} />
             {
                isLoggedIn 
                    ? <LogoutButton handleLogoutClick={handleLogoutClick} /> 
                    : <LoginButton handleLoginClick={handleLoginClick} />
             }

             <br />
             <br />
             <br />
             {/* Passing up props example */}
             <ChildComponentButton passingUpProps={passingUpProps}/>
         </div>
     )
}

export default Login