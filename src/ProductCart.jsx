import React from 'react'
import './ProductCart.css'
import { Button } from 'react-bootstrap';
import { useStateValue } from './StateProvider'

function ProductCart({ id, title, image, price, rating }) {

    const [{ cart }=cart, dispatch] = useStateValue();
    const removeitem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }

    return (
        <div className='productcart'>
            <img className='productcart__image' src={image} alt='' />
            <div className='productcart__info'>
                <h5 className='productcart__title'>{title}</h5>
                <h5 className='productcart__price'>{price}.PKR</h5>



                <div className='productcart__rating'>
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <span>*</span>
                            ))
                    }
                </div>
                <Button onClick={removeitem}>Remove From Cart</Button>
            </div>
        </div>


    )
}
export default ProductCart;