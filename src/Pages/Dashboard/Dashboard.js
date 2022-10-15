import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdDeliveryDining } from 'react-icons/md'
import { IoFastFoodOutline } from 'react-icons/io5';
import { FaCommentAlt, FaEnvelopeOpenText, FaUtensils } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { TbHistory } from 'react-icons/tb';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div style={{ "background": "#c4c4c441" }} class="drawer-content px-8">
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <>
                        <h1 className='text-3xl mb-10'>GoMeal<span>.</span></h1>
                        <li><Link to="/dash"><IoFastFoodOutline />Dashboard</Link></li>
                        <li><Link to="/menu"><TbHistory />Menu</Link></li>
                        <li><Link to="/order"><MdDeliveryDining />Food Order</Link></li>
                        <li><Link to="#"><FaCommentAlt />Reviews</Link></li>
                        <li><Link to="#"><AiFillSetting />Setting</Link></li>
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