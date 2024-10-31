import React from 'react'
// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'


import Placeorder from './pages/PlaceOrder/Placeorder'


const App = () => {

  return (
    <>

    <Routes>
      <Route path='/Placeorder' element={<Placeorder/>}></Route>
    </Routes>    </>
  
  )
}

export default App
