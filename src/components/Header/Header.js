import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
        <div className='logo'>
        <img src={logo} alt=""/>
        </div>
        <div className='bars'>
            <a href="/shop">Shop</a>
            <a href="/orders">Orders</a>
            <a href="/inventory">Inventory</a>
            <a href="/about">About</a>
        </div>
        </nav>
    );
};

export default Header;