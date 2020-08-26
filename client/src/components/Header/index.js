import React from 'react';
import { Link } from 'react-router-dom';
// import Auth from '../../utils/auth';

const Header = () => {

    return (
        <header>
            <Link to='/'>
                <h1>FrameIt</h1>
            </Link>

            <Link to='/login'>
                <h4>Login</h4>
            </Link>

            <Link to='/signup'>
                <h4>Signup</h4>
            </Link>

            <Link to='/profile'>
                <h4>Profile</h4>
            </Link>


        </header>
    )
}

export default Header;

