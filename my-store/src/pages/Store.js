import React,{useEffect,useContext} from 'react';
import {ShopContext} from '../context/ShopContext';
import {Link } from 'react-router-dom';
import './Store.css';
import CurrencyFormat from 'react-currency-format';
import ReactStars from "react-rating-stars-component";
import { BiChevronRight } from 'react-icons/bi';
import Footer from './Footer';


const Store = () => {

    const textdecor = { textDecoration: "none"}


    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

    const { fetchAllProducts, products ,addItemToCheckout,openCart} = useContext(ShopContext);

    useEffect(() => {
        fetchAllProducts()
        return () => {
            
        }
    }, [fetchAllProducts])

    if(!products) return <div>loading</div>

    return (
         <>
            <div className='enter'>
                <div className="about-link">
                    <Link className='align1' style={{textDecoration: 'none'}} to="/"><li>Home</li><span className='spann'><BiChevronRight /></span></Link>
                    <Link className='align2' style={{textDecoration: 'none'}} to="/store"><li>Store</li><span className='spann'><BiChevronRight /></span></Link>
                </div>
                <div className="product">
                    <h1>Products</h1>
                </div>
                <div className="store-products">
                        {
                        products.map(product=> {
                            let title = product.title.length > 25 ? product.title.slice(0, 15) + '...' : product.title;
                            return(
                                <div key={product.id}   >
                                    <Link style={textdecor} to={`/product/${product.id}`  }>
                                                <div className="wrap-products">
                                                    <img src={product.images[0].src}  className='store-img' alt='' />
                                                    </div>
                                                    <div className="store-price">
                                                        <h2 >{title}</h2>   
                                                        <CurrencyFormat value={product.variants[0].price} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <div className="current" >{value}</div>} />
                                                        <CurrencyFormat value={product.variants[0].compareAtPrice} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <div className="initial">{value}</div>} />
                                                            <ReactStars
                                                                    count={5}
                                                                    onChange={ratingChanged}
                                                                    size={13}
                                                                    activeColor="#ffd700"
                                                                />  
                                                </div>
                                    </Link>
                                                        <button className='add-cart' onClick={() =>{
                                                                addItemToCheckout(product.variants[0].id,1);
                                                                openCart();
                                                                }}>
                                                                Add to Cart
                                                        </button>
                                </div>
                            )
                            })
                        }
                    </div>
             </div>
             <Footer/>
            </>
    )
}

export default Store;
