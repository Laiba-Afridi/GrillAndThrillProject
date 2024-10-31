import React from 'react';
import { useState, useContext, } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import {Link,useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogIn}) => {
    //state variable
    const [menu, setMenu] = useState("Home");
    const { getTotalCartAmount } = useContext(StoreContext);
    
    
  return (
    <div className='nav-bar'>
      <img src={assets.logo} alt="logo" className='Logo' />
      <ul className='nav-bar-menu'>
        <Link to='/' onClick={()=> setMenu("Home")} className={menu==="Home" ? "active" : ""}>Home</Link>
        <a href='#Explore-Menu' onClick={()=> setMenu("Menu")} className={menu==="Menu" ? "active" : ""}>Menu</a>
        <a href='#MobileApp' onClick={()=> setMenu("Mobile App")} className={menu==="Mobile App" ? "active" : ""}>Mobile App</a>
        <a href='#footer' onClick={()=> setMenu("Contact")} className={menu==="Contact" ? "active" : ""}>Contact</a>
      </ul>
      <div className='nav-bar-option'>
       <img src={assets.search} alt="search" className='search-icon'/>
        <div className='navbar-search'>
        <Link to='/CartPage'><img src={assets.cart} alt="cart"/></Link>
       <div className={getTotalCartAmount()===0?"":"dot"}></div>
      </div>
      <button  onClick={()=>setShowLogIn(true)}>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
