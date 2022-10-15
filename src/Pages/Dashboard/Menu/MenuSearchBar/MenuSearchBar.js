import React from 'react';
import './MenuSearchBar.css';

const MenuSearchBar = () => {
    return (
        <div>
            {/* Menu search bar and button section start */}
            <div className='menu-search-addbtn-main-div'>
                <div class="col-xs-6" >
                    <div class="right-inner-addon">
                        <i class="icon-search"></i>
                        <input type="search" class="form-control" placeholder="Search" />
                    </div>
                </div>
                <div className='btn-pos-set'>
                    <button class="add-new-btn-style">Add New Menu</button>
                </div>
            </div>
            {/* Menu search bar and button section end */}
        </div>
    );
};

export default MenuSearchBar;