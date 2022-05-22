import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between container mx-auto'>
                <div className="img-holder">
                    <img src="" alt="" />
                    <h2 className='text-2xl'>Hammer Grilled</h2>
                </div>
                <div className='nav-links'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/shop'>Shop</NavLink>
                    <NavLink to='/blogs'>Blogs</NavLink>
                    <NavLink to='/dashboard'>Dashboard</NavLink>
                    <NavLink to='/myportfolio'>My Portfolio</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;