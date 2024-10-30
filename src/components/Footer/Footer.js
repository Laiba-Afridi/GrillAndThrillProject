import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>

            <div className='footer-left'>
            <img src={assets.footerLogo} alt=""/>
            <p>Savor the best burgers in town, crafted with the freshest ingredients and a passion for perfection. Join us for a taste experience like no other, where every bite is a celebration of flavor. Follow us on social media and stay updated with our latest creations and offers.</p>
            <div className='icons'>
            <img src={assets.socialicons} alt=""/>
            </div>  
            </div>

            <div className='footer-center'>
           <h2>COMPANY</h2>
           <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
           </ul>
            </div>


            <div className='footer-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+92 3498246375</li>
                <li>grillandthrill@gmail.com</li>
            </ul>
            </div>

           
        </div>
    <hr/>
    <p className='copyright'>Copyright 2024 © GrillAndThrill.com - All  Right Reserved</p>
    </div>
  )
}

export default Footer
