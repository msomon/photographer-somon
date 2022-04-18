import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Navbar.css'

const Navbar = () => {
  const [user] = useAuthState(auth)
  const logout = () => {
    signOut(auth);
  }
  return (
    <div className='navbar'>
      <p className='name'>My Pashion</p>
      <div className='header'>
      <CustomLink to='/'>Home</CustomLink>
      <CustomLink to='/checkout'>Checkout</CustomLink>
      <CustomLink to='/blogs'>Blogs</CustomLink>
      <CustomLink to='/about'>About</CustomLink>
    
      {
        user?.uid ? 
        <button className='signout' onClick={logout}>Sign Out</button> :
      <CustomLink to='/login'>Login</CustomLink>

      }
      </div>
      
    </div>
    
  );
};

export default Navbar;