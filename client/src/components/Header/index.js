import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <header>
            <Link to='/'>
                <h1>Frame bIt</h1>
            </Link>

            {Auth.loggedIn() ? (
            <>
              <Link to='/profile'><h4>Profile</h4></Link>
              <Link to="/" onClick={logout}>
                <h4>Logout</h4>
              </Link>
            </>
            ) : (
                <>
                    <Link to='/login'><h4>Login</h4></Link>
                    <Link to='/signup'><h4>Signup</h4></Link>
                </>
            )}
        </header>
    )
}

export default Header;

