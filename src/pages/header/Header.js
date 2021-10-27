import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div>
            <Link className="li" to="/home">home</Link>
            <Link  className="li" to="/adduser">adduser</Link>
            <Link  className="li" to="/update">update user</Link>
            <Link className="li" to='/login'>login</Link>
            <Link  className="li" to="/event">event</Link>
        </div>
    );
};

export default Header;