import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css'
import {useStateValue} from './StateProvider';
function Product({id, title,image, price,description, rating}) {
    const [{cart}, dispatch] = useStateValue() 
    

console.log('cart content' , cart)

    const AddToCart =() =>{
        dispatch({
         type:'ADD_TO_CART',
        
         item : {
             id: id,
             title : title,
             image:image,
             price:price,
             rating:rating
             

         }
        })
     }
     
     
    return (
        
        <div className='product'>
            
            <div className='product__info'>
                <h5>{title}</h5>
                <p className='product__price'>
                    <strong>{price}</strong>
                    <small>.PKR</small>
                </p>
                <div className='product__rating'>
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>*</p>
                            ))
                    }
                </div>
            </div>
            <p>{description}</p>
            <img src={image} alt=" " />
            <Button onClick={AddToCart}>Add To Cart</Button>

        </div>
    )
}

export default Product;
