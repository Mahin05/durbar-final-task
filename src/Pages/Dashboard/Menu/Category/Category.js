import React from 'react';
import cg1 from '../../../../assets/CategoryIcons/Baked.png';
import cg2 from '../../../../assets/CategoryIcons/Burger.png';
import cg3 from '../../../../assets/CategoryIcons/Coffee.png';
import cg4 from '../../../../assets/CategoryIcons/Chicken.png';
import cg5 from '../../../../assets/CategoryIcons/Fast.png';
import cg6 from '../../../../assets/CategoryIcons/Fish.png';
import cg7 from '../../../../assets/CategoryIcons/Dessert.png';
import cg8 from '../../../../assets/CategoryIcons/Chinese.png';
import './Category.css';

const Category = () => {
    return (
        <div>
            {/* category section start */}
            <div>
                <div><h2 className='text-1xl font-bold menu-text-style-set'>Category<span className='text-uppercase'></span></h2></div>
                <div className='category-main-div mt-5'>
                    <div class="box-border h-28 w-28 p-4 border-style-set">
                        <img className='h-10 w-10 ml-5 mt-2' src={cg1} alt="" />
                        <h1>Bakery</h1>
                    </div>
                    <div class="box-border h-28 w-28 p-4 border-style-set">
                        <img className='h-10 w-10 ml-5 mt-2' src={cg2} alt="" />
                        <h1>Burger</h1>
                    </div>
                    <div class="box-border h-28 w-28 p-4 border-style-set">
                        <img className='h-10 w-10 ml-5 mt-2' src={cg3} alt="" />
                        <h1>Beverage</h1>
                    </div>
                    <div class="box-border h-28 w-28 p-4 border-style-set">
                        <img className='h-10 w-10 ml-5 mt-2' src={cg4} alt="" />
                        <h1>Chicken</h1>
                    </div>
                    <div class="box-border h-28 w-28 p-4 border-style-set">
                        <img className='h-10 w-10 ml-5 mt-2' src={cg5} alt="" />
                        <h1>Pizza</h1>
                    </div>
                    <div class="box-border h-28 w-28 p-4 border-style-set">
                        <img className='h-10 w-10 ml-5 mt-2' src={cg6} alt="" />
                        <h1>Seafood</h1>
                    </div>
                    <div class="box-border h-28 w-28 p-4 border-style-set">
                        <img className='h-10 w-10 ml-5 mt-2' src={cg7} alt="" />
                        <h1>Dessert</h1>
                    </div>
                    <div class="box-border h-28 w-28 p-4 border-style-set">
                        <img className='h-10 w-10 ml-5 mt-2' src={cg8} alt="" />
                        <h1>Noodle</h1>
                    </div>
                </div>
            </div>
            {/* category section end */}
        </div>
    );
};

export default Category;