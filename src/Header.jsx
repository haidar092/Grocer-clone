import React,{useState} from 'react';
import SearchIcone from '@material-ui/icons/Search';
import {useStateValue} from './StateProvider';
import './Header.css'
import { Link } from 'react-router-dom';
import {auth} from './firebase';
import  ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';



function Header(){
    
    const [{cart,loggedinuser}] = useStateValue() ;
 
    const logoutuser = () => {
        if(loggedinuser){
            auth.signOut();
        }
    }

    

    return(
        <nav className="header">
            <img className='header__logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmAkg4uqItdnwtv4P4xT0EO-GE8n_m6yIYg&usqp=CAU'alt='logo'/>
            
            <div className='header__search'>
                <input type ='text' placeholder='search'  className='header__searchInput'/>
                <SearchIcone className='header__searchIcone' />
            </div>
            
               
            
            <div className='header__nav'>
            <Link to={!loggedinuser && '/login'} className='header__link'>
            <div onClick={logoutuser} className='header__option'>
                <span className='header__optionLineOne'>Hello, {loggedinuser?.email}</span>
                <span className='header__optionLineTwo'>{loggedinuser ? 'signOut' :'signIn'}</span>
            </div>
            </Link>

            <Link to={!loggedinuser && "/Contact" }className='header__link'>
            <div  className='header__option'>
                <span className='header__optionLineOne'>Contact</span>
                <span className='header__optionLineTwo'> Us</span>
            </div>
            </Link>
            
            </div>
            <Link to='checkout' className='header__link'>
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon />
                    <div className='header_optionLineTwo header__ProductCount'>{cart?.length}</div>
                </div>
            </Link>
        </nav>
    )
}

export default Header;
