import React,{useEffect,useContext,useState} from 'react'
import {useParams} from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import CurrencyFormat from 'react-currency-format';
import './ProductPage.css';
import { Dropdown, Icon } from "atomize";
import {Link } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';
import Footer from './Footer';




const ProductPage = () => {
    
    const [showDropdown , setshowDropdown] = useState(false)




    let { id } = useParams(); 

    const {fetchProductWithId, addItemToCheckout, product,openCart} = useContext(ShopContext)

    useEffect(() => {
        fetchProductWithId(id)
        
        return () => { 

        };
    }, [ fetchProductWithId, id])

    if (!product.title) return <div>Loading</div>

    console.log(product);

    return (
        <>
            <div className='enter'>
                  <div className="about-link">
                        <Link className='align1' style={{textDecoration: 'none'}} to="/"><li>Home</li><span className='spann'><BiChevronRight /></span></Link>
                        <Link className='align2' style={{textDecoration: 'none'}} to="/store"><li>Store</li><span className='spann'><BiChevronRight /></span></Link>
                  </div>
             <div className="pp-wrapper">
                    <div className="pp-img">
                        <img src={product.images[0].src} alt=""/>
                    </div>
                    <div className='pp-details'>
                        <h1>{product.title}</h1>
                        <div className="prices">
                            <CurrencyFormat value={product.variants[0].price} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <div className="pp-current" >{value}</div>} />
                            <CurrencyFormat value={product.variants[0].compareAtPrice} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <div className="pp-initial">{value}</div>} />
                        </div>
                        <Dropdown
                                className='dropdown'
                                isOpen={showDropdown}
                                onClick={() =>
                                setshowDropdown(!showDropdown )
                                }
                                
                                openSuffix={<Icon name="Up" color="info700" size="16px" />}
                                closeSuffix={<Icon name="Down" color="info700" size="16px" />}
                                        >
                                 Color
                        </Dropdown>
                        <button className='add-cart' onClick={() =>{
                                addItemToCheckout(product.variants[0].id,1)
                                openCart()
                                }}>
                                Add to Cart
                        </button>
                        <h5 className='describe'>{product.description}</h5>
                    </div>
             </div>
             </div>  
             <Footer />
        </>
    )
}

export default ProductPage
