import React from 'react';
import FoodCard from './FoodCard/FoodCard';
import FoodOrderNav from './FoodOrderNav/FoodOrderNav';
import RightSideDrawer from './RightSideDrawer/RightSideDrawer';
import './FoodOrder.css'

const FoodOrder = () => {
    return (
        <div className='main-div-of-food-section'>
            <div style={{"width":"170%"}}>
                <FoodOrderNav />
                <FoodCard />
            </div>
            <div>
                {/* <RightSideDrawer/> */}
            </div>
        </div>
    );
};

export default FoodOrder;