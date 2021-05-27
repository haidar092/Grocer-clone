import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className='footerarea'>

           <div className='footerarae__top'>
           <Link to='/'>
                <p>Back To Top</p>
                </Link>
            </div>
            <div className='footerarae__link'>
                <div className='footer__araelink'>
                    <Link to='/Contact'><span>Contact Us</span>
                    </Link>
                </div>
                <div className='footer__araelink'>
                    <Link to='checkout'><span>Your Cart</span>
                    </Link>
                </div>
                <div className='footer__araelink'>
                   <Link to=''> <span>Today's Deal</span>
                   </Link>'
                </div>
                
            </div>
            <div className='footerarae__link'>
            <div className='footer__araelink'>
                    <Link><span>Coustomer Service</span>
                    </Link>
                </div>
                <div className='footer__araelink'>
                    <Link><span>Gift's Card</span>
                    </Link>
                </div>
                <div className='footer__araelink'>
                    <Link><span>Registery</span>
                    </Link>
                </div>
            </div>
        </div>
    )

};
export default Footer;