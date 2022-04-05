import React, { useState } from 'react'

/** 
 * 
 * CSS modules vs Regular CSS
 * 
 * CSS modules have local scope. 
 * Same class name declarations in different CSS modules are ultimately different classes.
 * The benefits is that you avoid conflicts between selectors with different styles.
 * 
 * This will be apperent when we copy 'formStyle.css' and 'formStyle.module.css'
 * into previous lecture and display the components together.
 * The classes from the CSS modules will not conflict eachother
 * 
 */

import './formStyle.css'; // Import Regular CSS
import formStyles from './formStyle.module.css'; // Import CSS module CSS

function RegisterFormWithStyling() {
    const [user, setUser] = useState({
        firstname: 'First',
        lastname: '',
        email: '',
        password: '',
        age: '',
        gender: '',
        comment: 'Comment',
        country: 'FI'
    })

    const handleInputChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setUser({
            ...user,
            [inputName]: inputValue 
        });

        console.log(inputName, inputValue)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        alert(`Form was successfully submitted. Well done ${user.firstname} ${user.lastname}`); 
    }


    /**
     * Examples on 3 ways to implement CSS
     * 1. Inline                (Bad practice)
     * 2. Regular stylesheet    (Good practice)
     * 3. CSS modules           (Good practice)
     * 
     * There is a fourth way. With JS library "styled-components"  (BEST practice)
     */

    const warningMessageStyle = {
        backgroundColor: 'beige',
        padding: '10px',
        border: "1px solid orange",
        borderRadius: "5px",
        color: "darkorange"
    }
  
    return (
        <div id="register-form-wrapper">
            <h1>Register form with styling</h1>
            <form onSubmit={handleFormSubmit}>
                <div className="messages">
                    {/* Inline styling */}
                    <p style={warningMessageStyle}>Warning message, (Styled with inline style)</p>
                    {/* Regular stylesheet */}
                    <p className="success">Success message, (Styled with regular stylesheet)</p>
                    {/* CSS modules */}
                    <p className={formStyles.error}>Error message, (Styled with CSS modules)</p>
                </div>

                <label>First name</label>
                <input type="text" name="firstname" value={user.firstname} onChange={handleInputChange} />

                <label>Last name</label>
                <input type="text" name="lastname" value={user.lastname} onChange={handleInputChange} />

                <label>Email</label>
                <input type="email" name="email" value={user.email} onChange={handleInputChange} />

                <label>Password</label>
                <input type="password" name="password" value={user.password} onChange={handleInputChange} />

                <label>Age</label>
                <input type="number" name="age" value={user.age} onChange={handleInputChange} />

                <div className="form-row">
                    <label>Gender</label><br />
                    <input type="radio" id="male" name="gender" value="male" onChange={handleInputChange}/>
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female" onChange={handleInputChange}/>
                    <label for="female">Female</label>
                    <input type="radio" id="other" name="gender" value="other" onChange={handleInputChange}/>
                    <label for="other">Other</label> 
                </div>

                <label>Comment</label>
                <textarea type="text" name="comment" value={user.comment} onChange={handleInputChange} />

                <label>Country</label>
                <select name="country" value={user.country} onChange={handleInputChange}>
                    <option value="SE">Sweden</option>
                    <option value="NO">Norway</option>
                    <option value="FI">Finland</option>
                </select>

                {/* inline styling */}
                <input type="submit" value="register" />
            </form>
        </div>
    )
}

export default RegisterFormWithStyling
