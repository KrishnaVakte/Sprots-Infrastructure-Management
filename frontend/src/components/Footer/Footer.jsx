import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
          <div className="footer-content">
              <div className="footer-content-left">
                  <img className='logo' src={assets.logo} alt="" />
                  <p>Discover world-class Sports facilities designed to cater to athletes and enthusiasts of all levels. Our platform connects you with premier venues, ensuring you find the perfect place for your Sporting needs. From booking to playing, we make every step effortless and enjoyable. Join our community today and elevate your Sporting experience with us!</p>
                  <div className="footer-social-icons">
                      <img src={assets.facebook_icon} alt="" />
                      <img src={assets.twitter_icon} alt="" />
                      <img src={assets.linkedin_icon} alt="" />
                  </div>
              </div>
              <div className="footer-content-center">
                  <h2>COMPANY</h2>
                  <ul>
                      <li>Home</li>
                      <li>About Us</li>
                      <li>Booking Confirmation</li>
                      <li>Privacy Policy</li>
                  </ul>
              </div>
              <div className="footer-content-right">
                  <h2>GET IN TOUCH</h2>
                  <ul>
                      <li>+91 9856325896</li>
                      <li>contact@tomato.com</li>
                  </ul>
              </div>

        </div>
          <hr />
          <p className="footer-copyright">Copyright 2024 @ Tomato.come - All Right Reserved.</p>
    </div>
  )
}

export default Footer
