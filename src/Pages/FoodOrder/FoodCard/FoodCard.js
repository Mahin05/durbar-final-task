import React from 'react';
import './FoodCard.css';
import { AiTwotoneStar } from 'react-icons/ai';
import img from '../../../assets/BestSeller/placeholder.png';


const FoodCard = () => {
    return (
        <div>
            <div className='mt-7 food-cards-main-div'>
                <div className='main-food-card-div py-5'>
                    <h1 style={{ "fontWeight": "900" }}>Order#1</h1>
                    <p style={{ "color": "#a098ae", "fontSize": "13px" }}>Nov 11, 2021, 18:38 PM</p>
                    <hr />
                    <h1 style={{ "fontWeight": "700" }} className='all-text-align px-4 mt-3'>Fast Food Resto</h1>
                    <div style={{ "display": "flex" }} className='user-rev-style px-4 mb-3'><span style={{ "fontSize": "12px" }} className='mt-1'><AiTwotoneStar /></span><span style={{ "color": "#a098ae", "fontSize": "12px" }} > 5.0 ' 1k+ User Reviews</span></div>
                    <hr />
                    <div className='dd-pos all-text-align px-4 my-3'>
                        <div>
                            <h1 style={{ "fontSize": "12px", "color": "#a098ae" }}>delivery time</h1>
                            <h1 style={{ "fontSize": "12px", "color": "#a098ae" }}>Distance</h1>
                        </div>
                        <div>
                            <h1 style={{ "fontSize": "12px", "fontWeight": "600" }}>10min</h1>
                            <h1 style={{ "fontSize": "12px", "fontWeight": "600" }}>2.5 Km</h1>
                        </div>
                    </div>
                    <hr />
                    <div className='px-4'>
                        <h1 style={{ "fontWeight": "700" }} className='all-text-align my-2'>Order Menu</h1>
                        <div className='order-main-div'>
                            <div><img className='food-card-img' src={img} alt="" /></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} className='item-name-style'>Pepperoni Pizza</h1></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} >+$5.59</h1></div>
                        </div>
                        <div className='order-main-div my-3'>
                            <div><img className='food-card-img' src={img} alt="" /></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} >Cheese Burger</h1></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} >+$5.59</h1></div>
                        </div>
                    </div>
                    <hr />
                    <div style={{ "fontWeight": "600" }} className='total-div'>
                        <div><h1>Total</h1></div>
                        <div><h1>$202.00</h1></div>
                    </div>
                    <button className='food-card-button-style mt-7'>Completed</button>
                </div>
                <div className='main-food-card-div py-5'>
                    <h1 style={{ "fontWeight": "900" }}>Order#2</h1>
                    <p style={{ "color": "#a098ae", "fontSize": "13px" }}>Nov 11, 2021, 18:38 PM</p>
                    <hr />
                    <h1 style={{ "fontWeight": "700" }} className='all-text-align px-4 mt-3'>Fast Food Resto</h1>
                    <div style={{ "display": "flex" }} className='user-rev-style px-4 mb-3'><span style={{ "fontSize": "12px" }} className='mt-1'><AiTwotoneStar /></span><span style={{ "color": "#a098ae", "fontSize": "12px" }} > 5.0 ' 1k+ User Reviews</span></div>
                    <hr />
                    <div className='dd-pos all-text-align px-4 my-3'>
                        <div>
                            <h1 style={{ "fontSize": "12px", "color": "#a098ae" }}>delivery time</h1>
                            <h1 style={{ "fontSize": "12px", "color": "#a098ae" }}>Distance</h1>
                        </div>
                        <div>
                            <h1 style={{ "fontSize": "12px", "fontWeight": "600" }}>10min</h1>
                            <h1 style={{ "fontSize": "12px", "fontWeight": "600" }}>2.5 Km</h1>
                        </div>
                    </div>
                    <hr />
                    <div className='px-4'>
                        <h1 style={{ "fontWeight": "700" }} className='all-text-align my-2'>Order Menu</h1>
                        <div className='order-main-div'>
                            <div><img className='food-card-img' src={img} alt="" /></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} className='item-name-style'>Pepperoni Pizza</h1></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} >+$5.59</h1></div>
                        </div>
                        <div className='order-main-div my-3'>
                            <div><img className='food-card-img' src={img} alt="" /></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} >Cheese Burger</h1></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} >+$5.59</h1></div>
                        </div>
                    </div>
                    <hr />
                    <div style={{ "fontWeight": "600" }} className='total-div'>
                        <div><h1>Total</h1></div>
                        <div><h1>$202.00</h1></div>
                    </div>
                    <button className='food-card-button-stylee mt-7'>Delivering to you</button>
                </div>
                <div className='main-food-card-div py-5'>
                    <h1 style={{ "fontWeight": "900" }}>Order#3</h1>
                    <p style={{ "color": "#a098ae", "fontSize": "13px" }}>Nov 11, 2021, 18:38 PM</p>
                    <hr />
                    <h1 style={{ "fontWeight": "700" }} className='all-text-align px-4 mt-3'>Fast Food Resto</h1>
                    <div style={{ "display": "flex" }} className='user-rev-style px-4 mb-3'><span style={{ "fontSize": "12px" }} className='mt-1'><AiTwotoneStar /></span><span style={{ "color": "#a098ae", "fontSize": "12px" }} > 5.0 ' 1k+ User Reviews</span></div>
                    <hr />
                    <div className='dd-pos all-text-align px-4 my-3'>
                        <div>
                            <h1 style={{ "fontSize": "12px", "color": "#a098ae" }}>delivery time</h1>
                            <h1 style={{ "fontSize": "12px", "color": "#a098ae" }}>Distance</h1>
                        </div>
                        <div>
                            <h1 style={{ "fontSize": "12px", "fontWeight": "600" }}>10min</h1>
                            <h1 style={{ "fontSize": "12px", "fontWeight": "600" }}>2.5 Km</h1>
                        </div>
                    </div>
                    <hr />
                    <div className='px-4'>
                        <h1 style={{ "fontWeight": "700" }} className='all-text-align my-2'>Order Menu</h1>
                        <div className='order-main-div'>
                            <div><img className='food-card-img' src={img} alt="" /></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} className='item-name-style'>Pepperoni Pizza</h1></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} >+$5.59</h1></div>
                        </div>
                        <div className='order-main-div my-3'>
                            <div><img className='food-card-img' src={img} alt="" /></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} >Cheese Burger</h1></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} >+$5.59</h1></div>
                        </div>
                    </div>
                    <hr />
                    <div style={{ "fontWeight": "600" }} className='total-div'>
                        <div><h1>Total</h1></div>
                        <div><h1>$202.00</h1></div>
                    </div>
                    <button className='food-card-button-styleee mt-7'>Order being prepared</button>
                </div>
                <div className='main-food-card-div py-5'>
                    <h1 style={{ "fontWeight": "900" }}>Order#4</h1>
                    <p style={{ "color": "#a098ae", "fontSize": "13px" }}>Nov 11, 2021, 18:38 PM</p>
                    <hr />
                    <h1 style={{ "fontWeight": "700" }} className='all-text-align px-4 mt-3'>Fast Food Resto</h1>
                    <div style={{ "display": "flex" }} className='user-rev-style px-4 mb-3'><span style={{ "fontSize": "12px" }} className='mt-1'><AiTwotoneStar /></span><span style={{ "color": "#a098ae", "fontSize": "12px" }} > 5.0 ' 1k+ User Reviews</span></div>
                    <hr />
                    <div className='dd-pos all-text-align px-4 my-3'>
                        <div>
                            <h1 style={{ "fontSize": "12px", "color": "#a098ae" }}>delivery time</h1>
                            <h1 style={{ "fontSize": "12px", "color": "#a098ae" }}>Distance</h1>
                        </div>
                        <div>
                            <h1 style={{ "fontSize": "12px", "fontWeight": "600" }}>10min</h1>
                            <h1 style={{ "fontSize": "12px", "fontWeight": "600" }}>2.5 Km</h1>
                        </div>
                    </div>
                    <hr />
                    <div className='px-4'>
                        <h1 style={{ "fontWeight": "700" }} className='all-text-align my-2'>Order Menu</h1>
                        <div className='order-main-div'>
                            <div><img className='food-card-img' src={img} alt="" /></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} className='item-name-style'>Pepperoni Pizza</h1></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} >+$5.59</h1></div>
                        </div>
                        <div className='order-main-div my-3'>
                            <div><img className='food-card-img' src={img} alt="" /></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} >Cheese Burger</h1></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} >+$5.59</h1></div>
                        </div>
                    </div>
                    <hr />
                    <div style={{ "fontWeight": "600" }} className='total-div'>
                        <div><h1>Total</h1></div>
                        <div><h1>$202.00</h1></div>
                    </div>
                    <button className='food-card-button-style mt-7'>Completed</button>
                </div>
                <div className='main-food-card-div py-5'>
                    <h1 style={{ "fontWeight": "900" }}>Order#5</h1>
                    <p style={{ "color": "#a098ae", "fontSize": "13px" }}>Nov 11, 2021, 18:38 PM</p>
                    <hr />
                    <h1 style={{ "fontWeight": "700" }} className='all-text-align px-4 mt-3'>Fast Food Resto</h1>
                    <div style={{ "display": "flex" }} className='user-rev-style px-4 mb-3'><span style={{ "fontSize": "12px" }} className='mt-1'><AiTwotoneStar /></span><span style={{ "color": "#a098ae", "fontSize": "12px" }} > 5.0 ' 1k+ User Reviews</span></div>
                    <hr />
                    <div className='dd-pos all-text-align px-4 my-3'>
                        <div>
                            <h1 style={{ "fontSize": "12px", "color": "#a098ae" }}>delivery time</h1>
                            <h1 style={{ "fontSize": "12px", "color": "#a098ae" }}>Distance</h1>
                        </div>
                        <div>
                            <h1 style={{ "fontSize": "12px", "fontWeight": "600" }}>10min</h1>
                            <h1 style={{ "fontSize": "12px", "fontWeight": "600" }}>2.5 Km</h1>
                        </div>
                    </div>
                    <hr />
                    <div className='px-4'>
                        <h1 style={{ "fontWeight": "700" }} className='all-text-align my-2'>Order Menu</h1>
                        <div className='order-main-div'>
                            <div><img className='food-card-img' src={img} alt="" /></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} className='item-name-style'>Pepperoni Pizza</h1></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} >+$5.59</h1></div>
                        </div>
                        <div className='order-main-div my-3'>
                            <div><img className='food-card-img' src={img} alt="" /></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} >Cheese Burger</h1></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} >+$5.59</h1></div>
                        </div>
                    </div>
                    <hr />
                    <div style={{ "fontWeight": "600" }} className='total-div'>
                        <div><h1>Total</h1></div>
                        <div><h1>$202.00</h1></div>
                    </div>
                    <button className='food-card-button-style mt-7'>Completed</button>
                </div>
                <div className='main-food-card-div py-5'>
                    <h1 style={{ "fontWeight": "900" }}>Order#6</h1>
                    <p style={{ "color": "#a098ae", "fontSize": "13px" }}>Nov 11, 2021, 18:38 PM</p>
                    <hr />
                    <h1 style={{ "fontWeight": "700" }} className='all-text-align px-4 mt-3'>Fast Food Resto</h1>
                    <div style={{ "display": "flex" }} className='user-rev-style px-4 mb-3'><span style={{ "fontSize": "12px" }} className='mt-1'><AiTwotoneStar /></span><span style={{ "color": "#a098ae", "fontSize": "12px" }} > 5.0 ' 1k+ User Reviews</span></div>
                    <hr />
                    <div className='dd-pos all-text-align px-4 my-3'>
                        <div>
                            <h1 style={{ "fontSize": "12px", "color": "#a098ae" }}>delivery time</h1>
                            <h1 style={{ "fontSize": "12px", "color": "#a098ae" }}>Distance</h1>
                        </div>
                        <div>
                            <h1 style={{ "fontSize": "12px", "fontWeight": "600" }}>10min</h1>
                            <h1 style={{ "fontSize": "12px", "fontWeight": "600" }}>2.5 Km</h1>
                        </div>
                    </div>
                    <hr />
                    <div className='px-4'>
                        <h1 style={{ "fontWeight": "700" }} className='all-text-align my-2'>Order Menu</h1>
                        <div className='order-main-div'>
                            <div><img className='food-card-img' src={img} alt="" /></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} className='item-name-style'>Pepperoni Pizza</h1></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} >+$5.59</h1></div>
                        </div>
                        <div className='order-main-div my-3'>
                            <div><img className='food-card-img' src={img} alt="" /></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} >Cheese Burger</h1></div>
                            <div><h1 style={{ "fontSize": "9px", "fontWeight": "700" }} >+$5.59</h1></div>
                        </div>
                    </div>
                    <hr />
                    <div style={{ "fontWeight": "600" }} className='total-div'>
                        <div><h1>Total</h1></div>
                        <div><h1>$202.00</h1></div>
                    </div>
                    <button className='food-card-button-style mt-7'>Completed</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;