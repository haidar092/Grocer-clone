import React from 'react';
import './Checkout.css'
import {useStateValue} from './StateProvider';
import ProductCart from './ProductCart';
import Subtotal from './Subtotal';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Checkout() {
    
    const [{cart}] = useStateValue();
   
    return (
        <div className='Checkout'>
            <div className='Checkout__left'>

                {
                    cart.length === 0 ?(
                        <div>
                        <h2 className='checkout__title'>Your Cart Is Empty</h2>
                        <p>You Have No Items In Your Cart , Buy One</p>
                        <Button variant="outline-info" ><Link to='/'>Start Shoping
                        </Link></Button>
                    </div>

                    ) : (
                        <div>
                            <h2 className='shopingcarttittle'>Items In The Cart</h2>
                            {
                                cart.map(item =>(
                                    <ProductCart
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                    />
                                ))
                            }
                        </div>
                    )
                }
               

            </div>
            {
                cart.length > 0 && (
                    
              
            <div className='Checkout__right'>
               <Subtotal />
            </div>
              )
            }
        </div>
    )
}

export default Checkout;