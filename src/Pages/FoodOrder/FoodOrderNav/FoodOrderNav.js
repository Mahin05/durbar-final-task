import React from 'react';
import './FoodOrderNav.css'

const FoodOrderNav = () => {
    return (
        <div className='food-nav-main-div mt-7 pr-12'>
            <div>
                <h2 className='text-2xl font-bold menu-text-style-set'>Food Order<span className='text-uppercase'></span></h2>
            </div>
            <div class="col-xs-6" >
                <div class="right-inner-addon">
                    <i class="icon-search"></i>
                    <input type="search" class="form-control" placeholder="Search" />
                </div>
            </div>
        </div>
    );
};

export default FoodOrderNav;