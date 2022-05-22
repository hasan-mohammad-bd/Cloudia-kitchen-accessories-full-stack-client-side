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
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
