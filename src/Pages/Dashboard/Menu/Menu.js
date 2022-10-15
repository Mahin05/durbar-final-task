import React from 'react';
import Category from '../Menu/Category/Category'; 
import MenuNav from '../Menu/MenuNav/MenuNav'; 
import MenuSearchBar from '../Menu/MenuSearchBar/MenuSearchBar'; 
import Popular from '../Menu/Popular/Popular';
import BestSeller from '../Menu/BestSeller/BestSeller';
import Promo from '../Menu/Promo/Promo';


const Menu = () => {
    return (
        <div>
            <MenuNav/>
            <MenuSearchBar/>
            <Category/>
            <Popular/>
            <BestSeller/>
            <Promo/>
        </div>
    );
};

export default Menu;