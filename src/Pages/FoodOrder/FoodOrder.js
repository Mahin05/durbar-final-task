import React from 'react';
import FoodCard from './FoodCard/FoodCard';
import FoodOrderNav from './FoodOrderNav/FoodOrderNav';
import RightSideDrawer from './RightSideDrawer/RightSideDrawer';
import './FoodOrder.css'
import Navbar from '../Navbar/Navbar';

const FoodOrder = () => {
    return (
        <div>
            <div className='nav-hide'>
                <Navbar />
            </div>
            <div className='main-div-of-food-section'>
                <div style={{ "width": "170%" }}>
                    <FoodOrderNav />
                    <FoodCard />
                </div>
                <div>
                    {/* <RightSideDrawer/> */}
                </div>
            </div>
        </div>
    );
};

export default FoodOrder;