import React from 'react'
import './Footer.css';


const Footer = () => {
    return (
        <>
          <div className="first-footer">
            <div className="wrap">
                <h1>Quick links</h1>
                <ul>
                    <li>My account</li>
                    <li>Contact</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="wrap">
                <h1>Products</h1>
                <ul>
                    <li>iPhones</li>
                    <li>Samsung</li>
                    <li>Xiaomi</li>
                    <li>OnePlus</li>
                    <li>Nokia</li>
                </ul>
            </div>          
          <div className="wrap">
                <h1>Connect</h1>
                <ul>
                    <li>info@zubbytech.com</li>
                    <li>+2348110048369</li>
                </ul>
            </div>            
            <div className="wrap">
                <h1>Locate</h1>
                <ul>
                    <li>Zubby Corp.</li>
                    <li>Enugu, Nigeria.</li>
                </ul>
            </div>
          </div>
          <hr className='hr'/>
          <div className="second-footer">
              <div className='copy'>
                <p className="copyright">&copy; 2020 ZubbyTech Corp. All rights reserved.</p>
              </div>
              <div className="copy2">
                  <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/">About</a></li>
                      <li><a href="/">My account</a></li>
                      <li><a href="/">cart</a></li>
                      <li><a href="/">contact us</a></li>
                  </ul>
              </div>
          </div>
        </>
    )
}


export default Footer
