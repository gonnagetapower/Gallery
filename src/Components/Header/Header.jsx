import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav className="header__contacts">
                <ul>
                    <li>
                        <Link to='/me'>About Me</Link>
                    </li>
                    <li><Link to='/about'>
                        About App</Link>
                    </li>
                </ul>
            </nav>
            <div className="header__appName">
                <div>
                <h1>
                    <Link to='/'>
                        Gallery App</Link>
                </h1>
                </div>
            </div>
        </div>
    )
}

export default Header;