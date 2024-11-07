import React from 'react';
import './Header.css'
import NavUser from '../User/NavUser';

const Header = () => {
    return (

        <header style={{ backgroundColor: '#003366', color: '#fff', textAlign: 'center' }}>
            <div>
               <NavUser/> 
            </div>
        </header>


    );
};

export default Header;
