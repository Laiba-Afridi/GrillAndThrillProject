import React from 'react'
import Navbar from './components/NavBar/Navbar'
import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home/Home'
// import Footer from './components/Footer/Footer'
import CartPage from './components/Cart/CartPage'

const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
 {showLogin?<LogIn setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    </div>
    <Footer/>
    </>
  
  )
}

export default App