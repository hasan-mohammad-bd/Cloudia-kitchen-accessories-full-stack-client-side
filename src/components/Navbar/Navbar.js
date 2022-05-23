import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import "./Navbar.css";
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="py-5">
      <div className="flex justify-between container mx-auto">
        <div className="flex justify-around items-center">
        <div className="dropdown md:hidden">
      <label tabIndex="0" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/shop">Shop</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/myportfolio">My Portfolio</NavLink></li>
        {
            !user? <NavLink to="/login">Login</NavLink> : <button onClick={()=>{signOut(auth)}} className="btn btn-success">Logout</button>
          }
      </ul>
    </div>
    <div className="img-holder">
          <img src="" alt="" />
          <h2 className="text-2xl">Hammer Grilled</h2>
        </div>
        </div>

        <div>
        <div className="nav-links hidden md:flex items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/myportfolio">My Portfolio</NavLink>
          {
            !user? <NavLink to="/login">Login</NavLink> : <button onClick={()=>{signOut(auth)}} className="btn btn-success">Logout</button>
          }
        </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
