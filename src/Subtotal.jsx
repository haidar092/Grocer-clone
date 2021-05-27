import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { Button } from 'react-bootstrap';
import { useStateValue } from './StateProvider';
import './Subtotal.css'
function Subtotal() {

    const getCartTotal = (cart) =>
        cart?.reduce((amount, item) => item.price + amount, 0);

    const [{ cart }, dispach] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <p>
                        Subtotal({cart.length} items) : <strong> {`${value}`}</strong>
                    </p>
                )

                }
                decimalScale={2}
                value={getCartTotal(cart)} 
                displayType={'text'}
                thousandSeprator={true}
                prefix={'PKR'}
            />
            <Button className='checkout__button'>Proceed to Checkout</Button>

        </div>
    )
}
export default Subtotal;