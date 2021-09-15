import React, { useState } from "react";
import "./Header.scss";
import LOGO from "../assets/images/logo.svg";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => setClick(false);

  return (
    <div className='header__wrapper'>
      <div className='logo-wrapper'>
        <ul>
          <li>
            <img src={LOGO} alt='logo img' />
          </li>
        </ul>
      </div>

      <div className='nav-link nav_menu'>
        <ul className='nav-links'>
          <li className='nav-items'>Companies</li>
          <li className='nav-items'>Candidates</li>
          <li className='nav-items'>Assessment</li>
          <li className='nav-items'>Post a Job</li>
          <li className='nav-items'>Career Advice</li>
        </ul>

        <ul className='nav-links'>
          <li className='auth-links'>Sign Up</li>
          <li className='auth-links login'>Log In</li>
        </ul>
      </div>

      <div className='mobile-nav'>
        <ul>
          <li>
            <FiMenu />
          </li>
        </ul>
        {click && (
          <div className='nav-link'>
            <ul className='nav-links'>
              <li className='nav-items'>Companies</li>
              <li className='nav-items'>Candidates</li>
              <li className='nav-items'>Assessment</li>
              <li className='nav-items'>Post a Job</li>
              <li className='nav-items'>Career Advice</li>
            </ul>

            <ul className='nav-links'>
              <li className='auth-links'>Sign Up</li>
              <li className='auth-links login'>Log In</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
