import React, { useRef } from 'react'
import './SignIn.css'
import { useNavigate } from 'react-router-dom';
import auth from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function SignIn() {

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
                signInWithEmailAndPassword(auth, email, password).then((userData) => {
                        console.log(userData);
                        if (userData) {
                            alert("User Sign In Successfully")
                            navigate('/Home')
                        }
                    }).catch((error) => {
                        alert(error.message)
                    })



                }}>SignIn</button>
    </div>
  )
}

export default SignIn
