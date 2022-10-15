import React from 'react';
import menuIcon1 from '../../../../assets/MenuNavIcons/Vector.png';
import menuIcon2 from '../../../../assets/MenuNavIcons/Layer 2.png';
import menuIcon3 from '../../../../assets/MenuNavIcons/Process.png';
import menuIcon4 from '../../../../assets/MenuNavIcons/placeholder.png';
import './MenuNav.css'

const MenuNav = () => {
    return (
        <div>
            {/* Menu nav section start */}
            <div className='menu-nav-style'>
                <div><h2 className='text-2xl font-bold menu-text-style-set'>Menu<span className='text-uppercase'></span></h2></div>
                <div className='menu-icons'>
                    <img className='lg:mx-5' src={menuIcon1} alt="" />
                    <img className='lg:mx-5' src={menuIcon2} alt="" />
                    <img className='lg:mx-5' src={menuIcon3} alt="" />
                    <img className='lg:ml-10' src={menuIcon4} alt="" />
                </div>
            </div>
            {/* Menu nav section end */}
        </div>
    );
};

export default MenuNav;