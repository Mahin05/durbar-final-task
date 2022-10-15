import React from 'react';
import pi1 from '../../../../assets/PopularThisWeek/placeholder.png';
import pi2 from '../../../../assets/PopularThisWeek/Vector.png';
import { AiTwotoneStar } from 'react-icons/ai';
import './Popular.css';

const Popular = () => {
    return (
        <div>
            {/* popular this section start */}
            <div>
                <div><h2 className='text-1xl font-bold menu-text-style-set mt-7'>Popular This Week<span className='text-uppercase'></span></h2></div>
                <div className='popular-main-div mt-5'>
                    <div class="box-border p-4 popular-card">
                        <div className='popular-card-pos-set'>
                            <div>
                                <img className='h-20 w-15' src={pi1} alt="" />
                            </div>
                            <div className='card-side-style'>
                                <h1>Fish Burger</h1>
                                <h1><span>$</span>5.59</h1>
                                <div style={{ "display": "flex" }} className='user-rev-style'><span className='mt-1'><AiTwotoneStar /></span> 5.0 ' 1k+ User Reviews</div>
                            </div>
                            <div className='ml-10'>
                                <button><img src={pi2} alt="" />
                                </button>
                            </div>
                        </div>
                        <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
                    </div>
                    <div class="box-border p-4 popular-card">
                        <div className='popular-card-pos-set'>
                            <div>
                                <img className='h-20 w-15' src={pi1} alt="" />
                            </div>
                            <div className='card-side-style'>
                                <h1>Fish Burger</h1>
                                <h1><span>$</span>5.59</h1>
                                <div style={{ "display": "flex" }} className='user-rev-style'><span className='mt-1'><AiTwotoneStar /></span> 5.0 ' 1k+ User Reviews</div>
                            </div>
                            <div className='ml-10'>
                                <button><img src={pi2} alt="" />
                                </button>
                            </div>
                        </div>
                        <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
                    </div>
                    <div class="box-border p-4 popular-card">
                        <div className='popular-card-pos-set'>
                            <div>
                                <img className='h-20 w-15' src={pi1} alt="" />
                            </div>
                            <div className='card-side-style'>
                                <h1>Fish Burger</h1>
                                <h1><span>$</span>5.59</h1>
                                <div style={{ "display": "flex" }} className='user-rev-style'><span className='mt-1'><AiTwotoneStar /></span> 5.0 ' 1k+ User Reviews</div>
                            </div>
                            <div className='ml-10'>
                                <button><img src={pi2} alt="" />
                                </button>
                            </div>
                        </div>
                        <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
                    </div>
                    <div class="box-border p-4 popular-card">
                        <div className='popular-card-pos-set'>
                            <div>
                                <img className='h-20 w-15' src={pi1} alt="" />
                            </div>
                            <div className='card-side-style'>
                                <h1>Fish Burger</h1>
                                <h1><span>$</span>5.59</h1>
                                <div style={{ "display": "flex" }} className='user-rev-style'><span className='mt-1'><AiTwotoneStar /></span> 5.0 ' 1k+ User Reviews</div>
                            </div>
                            <div className='ml-10'>
                                <button><img src={pi2} alt="" />
                                </button>
                            </div>
                        </div>
                        <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
                    </div>
                </div>
            </div>
            {/* popular this section end */}
        </div>
    );
};

export default Popular;