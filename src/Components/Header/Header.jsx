import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div class="header">
            <nav class="header__contacts">
                <ul>
                    <li>About Me</li>
                    <li>About App</li>
                </ul>
            </nav>
            <div class="header__appName">
            <h1>Gallery App</h1>
            </div>
        </div>
    )
}

export default Header;