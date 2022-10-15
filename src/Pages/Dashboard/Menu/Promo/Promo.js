import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import pi1 from '../../../../assets/PopularThisWeek/placeholder.png';
import './Promo.css';

const Promo = () => {
    return (
        <div>
            {/* promo section start */}
            <div className='mb-8'>
                <div><h2 className='text-1xl font-bold menu-text-style-set mt-7'>Promo<span className='text-uppercase'></span></h2></div>
                <div className='promo-main-div mt-5'>
                    <div class="box-border p-4 promo-card">
                        <div className='promo-card-pos-set'>
                            <div className='card-side-style'>
                                <div className='off-style'>15% Off</div>
                                <h1>Fish Burger</h1>
                                <h1><span>$</span>5.59</h1>
                                <div style={{ "display": "flex" }} className='promo-rev-style'><span className='mt-1'><AiTwotoneStar /></span> 5.0 ' 1k+ User Reviews</div>
                            </div>
                            <div>
                                <img className='h-30 w-30' src={pi1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="box-border p-4 promo-card">
                        <div className='promo-card-pos-set'>
                            <div className='card-side-style'>
                                <div className='off-style'>15% Off</div>
                                <h1>Fish Burger</h1>
                                <h1><span>$</span>5.59</h1>
                                <div style={{ "display": "flex" }} className='promo-rev-style'><span className='mt-1'><AiTwotoneStar /></span> 5.0 ' 1k+ User Reviews</div>
                            </div>
                            <div>
                                <img className='h-30 w-30' src={pi1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="box-border p-4 promo-card">
                        <div className='promo-card-pos-set'>
                            <div className='card-side-style'>
                                <div className='off-style'>15% Off</div>
                                <h1>Fish Burger</h1>
                                <h1><span>$</span>5.59</h1>
                                <div style={{ "display": "flex" }} className='promo-rev-style'><span className='mt-1'><AiTwotoneStar /></span> 5.0 ' 1k+ User Reviews</div>
                            </div>
                            <div>
                                <img className='h-30 w-30' src={pi1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="box-border p-4 promo-card">
                        <div className='promo-card-pos-set'>
                            <div className='card-side-style'>
                                <div className='off-style'>15% Off</div>
                                <h1>Fish Burger</h1>
                                <h1><span>$</span>5.59</h1>
                                <div style={{ "display": "flex" }} className='promo-rev-style'><span className='mt-1'><AiTwotoneStar /></span> 5.0 ' 1k+ User Reviews</div>
                            </div>
                            <div>
                                <img className='h-30 w-30' src={pi1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* promo section end */}
        </div>
    );
};

export default Promo;