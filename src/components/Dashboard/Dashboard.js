import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../components/hook/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user)
    return (
<div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content container mx-auto">
    {/* <!-- Page content here --> */}
    <h2 className='text-3xl font-bold mb-5 ml-3'>My Dashboard</h2>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden ml-3">Dashboard menu</label>
    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link disabled to='/dashboard'>Welcome to dashboard</Link></li>
      {
        !admin && <li><Link to='/dashboard/myorder'>My Order</Link></li>
      }
      {
       !admin && <li><Link to='/dashboard/addreview'>Add a review</Link></li>
      }
      <li><Link to='/dashboard/myprofile'>My profile</Link></li>
      {
        admin && <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>
      }
      {
        admin && <li><Link to='/dashboard/manageallorders'>Manage All orders</Link></li>
      }
      {
        admin && <li><Link to='/dashboard/addproduct'>Add a product</Link></li>
      }
      {
        admin && <li><Link to='/dashboard/manageproduct'>Manage Product</Link></li>
      }
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;