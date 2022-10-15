import React from 'react';
import './RightSideDrawer.css'
import icn1 from '../../../assets/MenuNavIcons/Vector.png';
import icn2 from '../../../assets/MenuNavIcons/Layer 2.png';
import icn3 from '../../../assets/MenuNavIcons/Process.png';
import icn4 from '../../../assets/MenuNavIcons/placeholder.png';

const RightSideDrawer = () => {
    return (
        <div className='right-drawer'>
            <div className='side-icon'>
                <img className='lg:mx-5 mt-7' src={icn1} alt="" />
                <img className='lg:mx-5 mt-6' src={icn2} alt="" />
                <img className='lg:mx-5 mt-5' src={icn3} alt="" />
                <img className='lg:ml-10 mt-4' src={icn4} alt="" />
            </div>
            <div><h2 className='text-2xl font-bold menu-text-style-set'>Order Tracker<span className='text-uppercase'></span></h2></div>
        </div>
    );
};

export default RightSideDrawer;