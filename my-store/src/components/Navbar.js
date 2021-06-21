import React, { useContext,useState } from 'react'
import { Anchor } from 'atomize'
import { GiShoppingCart} from "react-icons/gi"
import { FaBars ,FaTimes } from "react-icons/fa";

import {  ShopContext} from '../context/ShopContext';
import './Navbar.css';



const Navbar = () => {
    const [toggle, setToggle] = useState(false)


    const Textdecor = { textDecoration: "none" ,color: "#FFFFFF"}

    const { openCart} = useContext(ShopContext)

    return (
            <div className='section-top'>
                    <Anchor textColor="gray100" href="/" className ='site-logo'>Zubby Tech</Anchor>
                    <div className="container">
                        <ul className={toggle ? 'stay' : 'remove'}>
                           <li> <a  href="/" className="loggo" style={Textdecor}>HOME</a></li>
                           <li> <a href="/store" className="loggo"  style={Textdecor}>STORE</a>  </li>
                        </ul>
                    </div>
                    <div className='divide'>
                                 <div className="search-box">
                                        <input type="text" placeholder="Type to Search..." name=""/>
                                 </div>

                                <Anchor onClick={() => openCart()}><GiShoppingCart className='cart'/></Anchor>
                                <div className='bars' onClick={() => setToggle(!toggle)}>
                                    {toggle ? <FaTimes/>  : <FaBars/>}
                                 </div>
                    </div>
                </div>
                
    )
}

export default Navbar
