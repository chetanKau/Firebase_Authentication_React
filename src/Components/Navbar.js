import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import './Navbar.css';
// import {SignIn} from './SignIn';

function Navbar() {
    const navigate = useNavigate();
    return (
        <div className='navbar'>
            <div>
                <NavLink to={"/"}><span className='spanTag'>AUTHENTICATION</span></NavLink>

            </div>
            <div className='navBtn'>
                <button onClick={() => {
                    navigate('/signIn')
                }}>Sign In</button>
                <button
                    onClick={() => {
                        navigate('/signUp')
                    }}>Sign Up</button>
            </div>

        </div>
    )
}

export default Navbar
