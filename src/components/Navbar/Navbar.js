import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import "./Navbar.css";
import { signOut } from 'firebase/auth';
import logo from '../../Image/logo (3).png'
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="py-5">
      <div className="flex justify-between items-center container mx-auto">
        <div className="flex justify-around items-center">
        <div className="dropdown md:hidden">
      <label tabIndex="0" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/shop">Shop</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        {
          user &&  <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        }
        <li><NavLink to="/myportfolio">My Portfolio</NavLink></li>
        {
            !user? <NavLink to="/login">Login</NavLink> : <button onClick={()=>{signOut(auth)}} className="btn btn-success">Logout</button>
          }
      </ul>
    </div>
    <div className="img-holder w-[150px] lg:w-[200px]">
          <img className="w-full" src={logo} alt="" />
        </div>
        </div>

        <div>
        <div className="nav-links hidden md:flex items-center navbar-items">
          <NavLink className={({isActive}) => (isActive? "activeRoute" : "inactiveRoute")} to="/">Home</NavLink>
          <div class="tooltip tooltip-open tooltip-warning" data-tip="Hot">
          <NavLink className={({isActive}) => (isActive? "activeRoute" : "inactiveRoute")} to="/shop">Shop</NavLink>
          </div>

          <NavLink className={({isActive}) => (isActive? "activeRoute" : "inactiveRoute")} to="/blogs">Blogs</NavLink>
          {
            user && <NavLink className={({isActive}) => (isActive? "activeRoute" : "inactiveRoute")} to="/dashboard">Dashboard</NavLink>
          }
          <NavLink className={({isActive}) => (isActive? "activeRoute" : "inactiveRoute")} to="/myportfolio">My Portfolio</NavLink>
          {
            !user? <NavLink to="/login">Login</NavLink> : <a onClick={()=>{signOut(auth)}} className="">Logout</a>
          }
        </div>

        </div>
        <div className="flex md:ml-14 nav-icons">
        <span className="ml-3"><AiOutlineHeart></AiOutlineHeart></span>
        <span className="ml-3"><FiSearch></FiSearch></span>
          <span className="ml-3"><FiShoppingCart></FiShoppingCart></span>


        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
