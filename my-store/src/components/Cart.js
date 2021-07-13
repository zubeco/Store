import React,{useContext} from 'react'; 
import { ShopContext } from '../context/ShopContext';
import {SideDrawer,Row,Col,Text} from 'atomize';
import CurrencyFormat from 'react-currency-format';
import './Cart.css';



const Cart = () => {

    const {isCartOpen, closeCart, checkout} = useContext(ShopContext)

    if (checkout.lineItems){
    return (
        <SideDrawer isOpen={isCartOpen} onClose={closeCart} w={{ xs: "50vw", sm: "24rem" , xl:"40rem"}}>
         {checkout.lineItems.length < 1 ?
                 <Row>
                    <Col><Text tag="h1" textColor="black500" textSize="paragraph" hoverTextColor="black700" transition="0.3s">Cart Is Empty</Text></Col>
                 </Row>
                   :
                        <>
                            <div className="cart-nav">
                                <h1>Your Cart</h1>
                                <h2>Enjoy free 2-day on all orders!</h2>
                            </div>
                            <a className='ship' href="/store">Continue Shopping</a>
                                {checkout.lineItems && checkout.lineItems.map(item=>(
                                        <div key={item.id}>
                                            <div className="cart-wrapper">
                                                <div className='split'>
                                                    <img src={item.variant.image.src} className='cart-img' alt=""/>
                                                    <h1>{item.title}</h1>
                                                </div>   
                                                <div className='pos'>
                                                    <CurrencyFormat value={item.variant.price} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <div className="current" >{value}</div>} />
                                                </div>
                                            </div>
                                        </div>
                                ))}
                                <button className='add-cart'><a href={checkout.webUrl} className='style-cart' rel="noopener noreferrer" target="_blank">Checkout</a></button>
                        </>
              }
        </SideDrawer>
    )
}
return null
}

export default Cart
