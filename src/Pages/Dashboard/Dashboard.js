import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdDeliveryDining } from 'react-icons/md'
import { IoFastFoodOutline } from 'react-icons/io5';
import { FaCommentAlt, FaEnvelopeOpenText, FaUtensils } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { TbHistory } from 'react-icons/tb';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import menuIcon1 from '../../assets/MenuNavIcons/Vector.png';
import menuIcon2 from '../../assets/MenuNavIcons/Layer 2.png';
import menuIcon3 from '../../assets/MenuNavIcons/Process.png';
import menuIcon4 from '../../assets/MenuNavIcons/placeholder.png';
import cg1 from '../../assets/CategoryIcons/Baked.png';
import cg2 from '../../assets/CategoryIcons/Burger.png';
import cg3 from '../../assets/CategoryIcons/Coffee.png';
import cg4 from '../../assets/CategoryIcons/Chicken.png';
import cg5 from '../../assets/CategoryIcons/Fast.png';
import cg6 from '../../assets/CategoryIcons/Fish.png';
import cg7 from '../../assets/CategoryIcons/Dessert.png';
import cg8 from '../../assets/CategoryIcons/Chinese.png';
import pi1 from '../../assets/PopularThisWeek/placeholder.png';
import pi2 from '../../assets/PopularThisWeek/Vector.png';
import bs1 from '../../assets/BestSeller/placeholder.png';
import bs2 from '../../assets/BestSeller/Vector.png';
import { AiTwotoneStar } from 'react-icons/ai';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div style={{ "background": "#c4c4c441" }} class="drawer-content px-8">
                {/* Menu nav section start */}
                <div className='menu-nav-style'>
                    <div><h2 className='text-2xl font-bold menu-text-style-set'>Menu<span className='text-uppercase'></span></h2></div>
                    <div className='menu-icons'>
                        <img className='lg:mx-5' src={menuIcon1} alt="" />
                        <img className='lg:mx-5' src={menuIcon2} alt="" />
                        <img className='lg:mx-5' src={menuIcon3} alt="" />
                        <img className='lg:ml-10' src={menuIcon4} alt="" />
                    </div>
                </div>
                {/* Menu nav section end */}

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



                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <>
                        <h1 className='text-3xl mb-10'>GoMeal<span>.</span></h1>
                        <li><Link to="/dashboard/addProduct"><IoFastFoodOutline />Dashboard</Link></li>
                        <li><Link to="/dashboard/manage"><TbHistory />Menu</Link></li>
                        <li><Link to="/dashboard/users"><MdDeliveryDining />Food Order</Link></li>
                        <li><Link to="/dashboard/manage"><FaCommentAlt />Reviews</Link></li>
                        <li><Link to="/dashboard/manage"><AiFillSetting />Setting</Link></li>
                    </>
                    {/* <>
                        <h1 className='text-3xl mb-10'>GoMeal<span>.</span></h1>
                        <li><Link to="/dashboard/addProduct"><IoFastFoodOutline />Dashboard</Link></li>
                        <li><Link to="/dashboard/users"><MdDeliveryDining />Food Order</Link></li>
                        <li><Link to="/dashboard/manage"><FaCommentAlt />Favorite</Link></li>
                        <li><Link to="/dashboard/manage"><FaEnvelopeOpenText />Message</Link></li>
                        <li><Link to="/dashboard/manage"><FaUtensils />Order History</Link></li>
                        <li><Link to="/dashboard/manage"><TbHistory />Bills</Link></li>
                        <li><Link to="/dashboard/manage"><AiFillSetting />Setting</Link></li>
                    </> */}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;