import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Shop from './components/Shop';
import Blogs from './components/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import MyPortfolio from './components/MyPortfolio';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PageNotFound from './components/PageNotFound';
import MyOrder from './components/Dashboard/MyOrder';
import AddReview from './components/Dashboard/AddReview';
import MyProfile from './components/Dashboard/MyProfile';
import MakeAdmin from './components/Dashboard/MakeAdmin';
import ManageAllOrders from './components/Dashboard/ManageAllOrders';
import ManageProduct from './components/Dashboard/ManageProduct';
import AddProduct from './components/Dashboard/AddProduct';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path ='addreview' element={<AddReview></AddReview>}></Route>
          <Route path ='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path ='makeadmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path ='manageallorders' element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path ='manageproduct' element={<ManageProduct></ManageProduct>}></Route>
          <Route path ='addProduct' element={<AddProduct></AddProduct>}></Route>
        </Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer position="bottom-right"></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
