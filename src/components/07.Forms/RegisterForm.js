import userEvent from '@testing-library/user-event'
import React, {useState} from 'react'
import './formStyle.css'; // Import Regular CSS
import formStyles from './formStyle.module.css'; // Import CSS module CSS


function RegisterForm() {
    // const [firstname, setFirstname] = useState('');
    // const [lastname, setLastname] = useState('');
    // const [comment, setComment] = useState('');
    // const [country, setCountry] = useState('FI');

    /**
     * The general "user"-state replaces all above states :)
     */
    const [user, setUser] = useState({
        firstname: 'John',
        lastname: '',
        comment: '',
        country: 'SE'
    })    

    /**
     * The general "handleChange" function replaces alla other "handle..." functions below
     */
    const handleChange = (e) => {
        const fieldName = e.target.name
        const fieldValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        
        console.log('fieldName:' + fieldName);
        console.log('fieldValue:' + fieldValue);

        setUser({
            ...user,
            [fieldName]: fieldValue
        })
        /**
            {
                firstname: '',
                lastname: '',
                comment: '',
                country: 'SE',
                firstname: "John"
            }
         */
    }

    // const handeFirstnameInput = (e) => {
    //     setUser({
    //         ...user,
    //         firstname: e.target.value
    //     })

    //     /**
    //         {
    //             firstname: '',
    //             lastname: '',
    //             comment: '',
    //             country: 'SE',
    //             firstname: e.target.value
    //         }
    //      */
    // }

    // const handeLastnameInput = (e) => {
    //     setUser({
    //         ...user,
    //         lastname: e.target.value
    //     })
    // }

    // const handeCommentTextArea = (e) => {
    //     setUser({
    //         ...user,
    //         comment: e.target.value
    //     })
    // }

    // const handeCountrySelect = (e) => {
    //     setUser({
    //         ...user,
    //         country: e.target.value
    //     })
    // }

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`
            The form contains the following data:
            ${user.firstname}
            ${user.lastname}
            ${user.comment}
            ${user.country}
        `);

        // Reset the form after submit
        setUser({
            firstname: '',
            lastname: '',
            comment: '',
            country: 'SE'
        })
    }

    /**
     * React is very controlling
     * A controlled component is the standard way of handling HTML forms in React
     * Meaning state needs to keep track of initial values and all the changes done by the user, 
     * in the HTML form
     * 
     * Tip: There is a popular Form library called "Formik",
     * for a complete solution including validation, keeping track of the visited fields, andd handling form submissions
     */
    return (
        <div id="register-form-wrapper">
            <h1>Register form.</h1>

            <form onSubmit={handleSubmit}>
                <div className="messages">
                    {/* Regular stylesheet */}
                    <p className="success">Success message, (Styled with regular stylesheet)</p>
                    {/* CSS modules */}
                    <p className={formStyles.error}>Error message, (Styled with CSS modules)</p>
                </div>

                <label>First name: </label>
                <input type="text" name="firstname" value={user.firstname} onChange={handleChange} />

                <label>Last name: </label>
                <input type="text" name="lastname" value={user.lastname} onChange={handleChange} />

                <label>Comment: </label>
                <textarea name="comment" value={user.comment} onChange={handleChange}></textarea>

                <label>Country: </label>
                <select name="country" value={user.country} onChange={handleChange}>
                    <option value="SE">Sweden</option>
                    <option value="NO">Norway</option>
                    <option value="FI">Finland</option>
                </select>

                <button>Send</button>

                <h2>User : {JSON.stringify(user)}</h2>
            </form>


        </div>
    )
}

export default RegisterForm