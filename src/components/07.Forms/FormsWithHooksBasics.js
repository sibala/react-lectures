import React, {useState} from 'react'

function FormsWithHooksBasics() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    const handleFirstNameInput = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastNameInput = (e) => {
        setLastName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setFullName(`${firstName} ${lastName}`);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="firstname" 
                placeholder="firstname" 
                value={firstName} 
                onChange={handleFirstNameInput}    
            />

            <input 
                type="text" 
                name="lastname" 
                placeholder="lastname" 
                value={lastName} 
                onChange={handleLastNameInput}    
            />  

            <button>Send</button>

            <h2>Firstname: {firstName}</h2>
            <h2>Lastname: {lastName}</h2>
            <h2>Fullname: {fullName}</h2>
        </form>
    )
}

export default FormsWithHooksBasics