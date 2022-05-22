import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
<div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content container mx-auto">
    {/* <!-- Page content here --> */}
    <h2 className='text-3xl font-bold mb-5 ml-3'>My Dashboard</h2>
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden ml-3">Dashboard menu</label>
    <Outlet></Outlet>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>My Order</Link></li>
      <li><Link to='/dashboard/addreview'>Add a review</Link></li>
      <li><Link to='/dashboard/myprofile'>my profile</Link></li>
      <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>
      <li><Link to='/dashboard/manageallorders'>Manage All orders</Link></li>
      <li><Link to='/dashboard/addproduct'>Add a product</Link></li>
      <li><Link to='/dashboard/manageproduct'>Manage Product</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;