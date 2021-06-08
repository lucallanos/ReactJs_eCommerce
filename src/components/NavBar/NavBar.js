import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <nav className='navBar'>
            <h2>Minimum60</h2>
            <div className='navBar-center'>
                <button className='navBar-center-text'>Home</button>
                <button className='navBar-center-text'>Products</button>
                <button className='navBar-center-text'>Build your Pc</button>
            </div>
        </nav>
    )
}

export default NavBar
