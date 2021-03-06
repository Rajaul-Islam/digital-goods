import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const MakeAmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    console.log(email);
    const handleOnBlur = e => {

        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email }
        console.log(user);
        fetch('https://boiling-ravine-21246.herokuapp.com/uniqueUser/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    setSuccess(true);
                }


            })

        e.preventDefault()
    }
    return (
        <div>
            <h1>Make admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <input
                    onBlur={handleOnBlur}
                    type="email"
                    required
                    className='w-50 my-3 mx-auto'
                    placeholder="name@example.com"
                />
                <input
                    type='submit'
                    value='submit'
                >
                </input>
            </form>
            {
                success && <Alert variant='success' className='w-25 mx-auto ' >
                    Admin added successfully
                </Alert>}
        </div>
    );
};

export default MakeAmin;