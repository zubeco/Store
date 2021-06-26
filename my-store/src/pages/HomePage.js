import React,{useContext, useEffect} from 'react'
import {ShopContext} from '../context/ShopContext';
import { Anchor} from 'atomize';
import {Link } from 'react-router-dom';
import pic3 from '../../src/images/pics3.jpg';
import apple from '../../src/images/apple.png';
import oppo from '../../src/images/oppo.png';
import xiaomi1 from '../../src/images/xiaomi1.png';
import samsung1 from '../../src/images/samsung1.png';
import oneplus2 from '../../src/images/oneplus2.png';
import d1 from '../../src/images/d1.jpg';
import d2 from '../../src/images/d2.jpg';
import d3 from '../../src/images/d3.jpg';
import './HomePage.css';
import CurrencyFormat from 'react-currency-format';
import ReactStars from "react-rating-stars-component";
import Footer from './Footer';



const HomePage = () => {
      
    const textdecor = { textDecoration: "none"}


    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

    const { fetchAllProducts, products } = useContext(ShopContext);

    useEffect(() => {
        fetchAllProducts()
        return () => {
            
        }
    }, [fetchAllProducts])

    if(!products) return <div>loading</div>
    console.log(products[0]);
    return (
         <div className='page-container' >
                 <div className='genk'>
                    <img className='img' src={pic3} alt=""/>
                    
                            <div className='wah'>
                                <div className="info1">
                                    <h1>Affordable luxury made in Nigeria</h1>
                                    <h2>Bad vibes don't go with my outfit.</h2>
                                    <button className='btn'><Anchor textColor="gray100" href="/store">SHOP NOW</Anchor></button>
                                </div>

                             </div>

                    </div>
                    <div className="middle-container">
                         <div className="resize">
                                 <div className='kante'>
                                        <img className='logo-slider' src={apple}  alt="wait"/>
                                        <img className='logo-slider' src={samsung1}  alt="wait"/>
                                        <img className='logo-slider' src={oppo}  alt="wait"/>
                                        <img className='logo-slider' src={xiaomi1}  alt="wait"/>
                                        <img className='logo-slider' src={oneplus2}  alt="wait"/>
                                  </div>
                          </div>
                     <div className="control2">
                            <div className='conte'>
                                <img className='loggoo'  src={d1} alt=""/>
                                <div className='under-logo'>
                                    <h1>Cora Makeup kit</h1>
                                    <p>Wear this sweatshirt as your casual look, for Jogging and Gym.</p>
                                </div>
                                <button className='move-btn'><a href="/store">SHOP NOW</a></button>
                            </div>             
                      <div className='conte'>
                            <img className='loggoo'  src={d2} alt=""/>
                                <div className='under-logo'>
                                    <h1>Cora Makeup kit</h1>
                                    <p>Wear this sweatshirt as your casual look, for Jogging and Gym.</p>
                                </div>
                            <button className='move-btn'><a href="/store">SHOP NOW</a></button>
                      </div>
                        <div className='conte'>
                            <img className='loggoo'  src={d3} alt=""/>
                                <div className='under-logo'>
                                    <h1>Cora Makeup kit</h1>
                                    <p>Wear this sweatshirt as your casual look, for Jogging and Gym.</p>
                                </div>
                            <button className='move-btn'><a href="/store">SHOP NOW</a></button>
                        </div>
                     </div>
            </div>
                          <div className="grid-wrapper">
                                <h1>Featured Products</h1>
                               <div className='line'><hr/></div> 
                                <div className="grid-products">
                                            {
                                            products.slice(1,4).map(product=> {
                                                return(
                                                    <div key={product.id}   >
                                                        <Link style={textdecor} to={`/product/${product.id}`  }>
                                                                    <div className="put">
                                                                        <img src={product.images[0].src}  className='arrange' alt='' />
                                                                        <div className="price">
                                                                            <h2 >{product.title}</h2>         
                                                                            <CurrencyFormat value={product.variants[0].price} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <div className="after" >{value}</div>} />
                                                                            <CurrencyFormat value={product.variants[0].compareAtPrice} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <div className="before">{value}</div>} />
                                                                                <ReactStars
                                                                                        count={5}
                                                                                        onChange={ratingChanged}
                                                                                        size={13}
                                                                                        activeColor="#ffd700"
                                                                                    />  
                                                                         </div>
                                                                    </div>
                                                        </Link>
                                                    </div>
                                                )
                                                })
                                            }
                                     </div>
                                </div>
                        <Footer/>
         </div>
    )
}

export default HomePage
