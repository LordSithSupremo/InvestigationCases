import React from 'react';
import '../styles/Header.css';
import logo from '../assets/img/spy.svg';

const Header = () => {
    return (
        <header className='header'>
            <span className="title">
                <h2>Investigation Cases</h2>
            </span>
            <span className="logo">
                <img src={logo} alt="logo da página"  width="50px" height="50px"/>
            </span>
        </header>
    );
};


export default Header;