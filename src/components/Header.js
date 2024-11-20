import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../images/igk_food_logo.png'
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {

  const isOnline = useOnlineStatus();

  const {loggedInUser,isLoggedIn,setIsLoggedIn} = useContext(UserContext);

  const cartItems = useSelector((store)=> store.cart.items);
 
  return (
    <div className='fixed top-0 left-0 right-0 flex flex-col justify-between bg-blue-100 shadow-lg md:flex-row z-10'>
      <div className='flex items-center justify-between p-4 md:p-0'>
        <Link to={'/'}>
          <div className=''>
            <img className='' src={LOGO} alt='Food Logo' />
          </div>
        </Link>
      </div>
      <div className='flex md:items-center'>
        <ul className='flex p-4 m-4 items-center'>
          <li className='hidden md:inline px-4 w-40'>
            Online Status: {isOnline ? '✅' : '🔴'}
          </li>
          <li className='px-4'>
            <Link to={'/'}>Home</Link>
          </li>
          <li className='px-4'>
            <Link to={'/about'}>About</Link>
          </li>
          <li className='px-4'>
            <Link to={'/contact'}>Contact</Link>
          </li>
          <li className='px-4'>
            <Link to={'/grocery'}>Grocery</Link>
          </li>
          <li className='px-4'>
            <Link to={'/cart'}>Cart : ({cartItems.length} items)</Link>
          </li>
         
        </ul>
      </div>
      <div className='md:hidden p-4'>
        <p>
          {isOnline ? '✅' : '🔴'}
        </p>
      </div>
    </div>
  );
};

export default Header;
