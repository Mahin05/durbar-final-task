import React from 'react';
import Category from '../Menu/Category/Category';
import MenuNav from '../Menu/MenuNav/MenuNav';
import MenuSearchBar from '../Menu/MenuSearchBar/MenuSearchBar';
import Popular from '../Menu/Popular/Popular';
import BestSeller from '../Menu/BestSeller/BestSeller';
import Promo from '../Menu/Promo/Promo';
import Navbar from '../../Navbar/Navbar';
import './Menu.css';


const Menu = () => {
    return (
        <div>
            <div className='nav-hide'>
                <Navbar />
            </div>
            <MenuNav />
            <MenuSearchBar />
            <Category />
            <Popular />
            <BestSeller />
            <Promo />
        </div>
    );
};

export default Menu;