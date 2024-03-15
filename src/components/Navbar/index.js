import React, { useState } from 'react';
import './style.scss';
import Logo from '../../assets/images/Logo';

const Navbar = () => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='navbar'>
      <div>
        <Logo></Logo>
      </div>

      <div>
        <ul className={`menuOptions ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
          <li>sobre nós</li>
          <li>como funciona</li>
          <li>soluções</li>
          <li>blog</li>
          <li>solicitar uma demo</li>

          <li style={{ display: isMobileMenuOpen ? 'block' : 'none' }} className='hidden-menu btn-login'>login</li>
          <li style={{ display: isMobileMenuOpen ? 'block' : 'none' }} className='hidden-menu btn-register'>registre-se</li>
        </ul>
      </div>

      <div className='hamburger-menu' onClick={toggleMobileMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>

      <div>
        <ul className='menuOptions'>
          <li className='btn-login'>login</li>
          <li className='btn-register'>registre-se</li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar