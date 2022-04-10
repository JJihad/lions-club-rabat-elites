import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './MainNavigation.css';
import Logo from "../images/logo-lions-rabat-elites.jpg";
import { Link } from "react-router-dom";

function MainNavigation() {
  const [toggleActive, setToggleActive] = useState(false);
  const handleToggle = () => setToggleActive(!toggleActive);

  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <ul className={toggleActive ? 'navMenu active' : 'navMenu'}>
        <li className='navItem'>
          <Link to="/">ABOUT US</Link>
        </li>
        <li className='navItem'>
          <Link to="/">CONTACT US</Link>
        </li>
        <li className='navItem'>
          <Link to="/donate">DONATE</Link>
        </li>
      </ul>

      <div className='toggler' onClick={handleToggle}>
      {toggleActive ? (<FaTimes size={30} />) : (<FaBars size={30} />)}
      </div>
    </div>
  );
}

export default MainNavigation;
