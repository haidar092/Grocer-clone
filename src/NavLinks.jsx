import React from 'react'
import { Link } from 'react-router-dom'
import './NavLinks.css'
function NavLinks() {
    return (
        <div className='navlinks'>
            <div className='navlinks__outer'>
                <div className='navlinks__inner'>
                    <Link>Today's Deals</Link>
                    <Link>Coustomer Service</Link>
                    <Link>Gift's Card</Link>
                    <Link>Registery</Link>
                    <Link>Sell</Link>
                </div>
            </div>
        </div>
    )

};
export default NavLinks;