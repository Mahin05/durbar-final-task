import React from 'react';
import bs1 from '../../../../assets/BestSeller/placeholder.png';
import bs2 from '../../../../assets/BestSeller/Vector.png';
import './BestSeller.css';

const BestSeller = () => {
    return (
        <div>
            {/* Best seller section start */}
            <div>
                <div><h2 className='text-1xl font-bold menu-text-style-set mt-7'>Best Seller<span className='text-uppercase'></span></h2></div>
                <div className='best-seller-card-main-div'>
                    <div class="w-96 bg-base-100 best-seller-card mt-8">
                        <figure class="mt-5 mx-5">
                            <img src={bs1} class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title card-text-size">Pepperoni Pizza</h2>
                            <h2 class="card-title card-text-size">$5.59</h2>
                            <div className='sold-card'>
                                <h2 class="card-title card-text-size">Sold 1k| + 15%</h2>
                                <img style={{ "transform": "rotate(90deg)" }} src={bs2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class=" w-96 bg-base-100 best-seller-card mt-8">
                        <figure class="mt-5 mx-5">
                            <img src={bs1} class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title card-text-size">Pepperoni Pizza</h2>
                            <h2 class="card-title card-text-size">$5.59</h2>
                            <div className='sold-card'>
                                <h2 class="card-title card-text-size">Sold 1k| + 15%</h2>
                                <img style={{ "transform": "rotate(90deg)" }} src={bs2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class=" w-96 bg-base-100 best-seller-card mt-8">
                        <figure class="mt-5 mx-5">
                            <img src={bs1} class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title card-text-size">Pepperoni Pizza</h2>
                            <h2 class="card-title card-text-size">$5.59</h2>
                            <div className='sold-card'>
                                <h2 class="card-title card-text-size">Sold 1k| + 15%</h2>
                                <img style={{ "transform": "rotate(90deg)" }} src={bs2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class=" w-96 bg-base-100 best-seller-card mt-8">
                        <figure class="mt-5 mx-5">
                            <img src={bs1} class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title card-text-size">Pepperoni Pizza</h2>
                            <h2 class="card-title card-text-size">$5.59</h2>
                            <div className='sold-card'>
                                <h2 class="card-title card-text-size">Sold 1k| + 15%</h2>
                                <img style={{ "transform": "rotate(90deg)" }} src={bs2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class=" w-96 bg-base-100 best-seller-card mt-8">
                        <figure class="mt-5 mx-5">
                            <img src={bs1} class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title card-text-size">Pepperoni Pizza</h2>
                            <h2 class="card-title card-text-size">$5.59</h2>
                            <div className='sold-card'>
                                <h2 class="card-title card-text-size">Sold 1k| + 15%</h2>
                                <img style={{ "transform": "rotate(90deg)" }} src={bs2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class=" w-96 bg-base-100 best-seller-card mt-8">
                        <figure class="mt-5 mx-5">
                            <img src={bs1} class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title card-text-size">Pepperoni Pizza</h2>
                            <h2 class="card-title card-text-size">$5.59</h2>
                            <div className='sold-card'>
                                <h2 class="card-title card-text-size">Sold 1k| + 15%</h2>
                                <img style={{ "transform": "rotate(90deg)" }} src={bs2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Best seller section end */}
        </div>
    );
};

export default BestSeller;