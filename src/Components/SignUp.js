import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react'
import './SignUp.css'
import auth from '../firebase';
import { useNavigate } from 'react-router-dom';
// import auth from './../firebase';

function SignUp() {
    const refEmail = useRef(null);
    const refPassword = useRef(null);
    // const auth = getAuth()
    const navigate = useNavigate();

    return (
        <div>
            <input ref={refEmail} type='email' placeholder='Emai ID' />
            <input ref={refPassword} type='password' placeholder='Password' />
            <button type="Submit" onClick={() => {
                const email = refEmail.current.value;
                const password = refPassword.current.value;
                    createUserWithEmailAndPassword(auth, email, password).then((userData) => {
                        console.log(userData);
                        if (userData) {
                            alert("User Registered Successfully")
                            navigate('/SignIn')
                        }
                    }).catch((error) => {
                        alert(error.message)
                    })



                }}>Register</button>
        </div>
    )
}

export default SignUp
