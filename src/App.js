import React from 'react'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/NavBar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import CartPage from './pages/Cart/CartPage'
import Placeorder from './pages/PlaceOrder/Placeorder'

import LogIn from './components/Login/LogIn'

const App = () => {
  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LogIn setShowLogin={setShowLogin}/>:<></>}

      <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/CartPage' element={<CartPage/>}></Route>
      <Route path='/Placeorder' element={<Placeorder/>}></Route>
    </Routes>
    </div>
    <Footer/>
    </>
  
  )
}

export default App
