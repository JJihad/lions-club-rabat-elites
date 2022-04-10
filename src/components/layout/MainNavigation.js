import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import classes from './MainNavigation.module.css';
import Logo from '../images/logo-lions-rabat-elites.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function MainNavigation() {
    const [toggleVisible, setToggleVisible] = useState(false);
    const handleToggle = () => setToggleVisible(!toggleVisible);

    function navMenu() {
        return toggleVisible ? 'navMenu activeToggle' : classes.navMenu;
    }

    // for closed menu : use bars for toggle icon 
    // for opened menu : use X for toggle icon
    function togglerIcon() {
        return (
            toggleVisible ? <FaTimes size={30} /> : <FaBars size={30} />
        );
    }

  return (
      <header>
        <nav className={classes.navbar}>
          <div className={classes.logo}>
              <Link to='/'><img src={Logo} alt='logo'/></Link>
              </div>
          <ul className={navMenu()}>
              <li className={classes.navItem}></li>
              <li className={classes.navItem}><Link to='/'>ABOUT US</Link></li>
              <li className={classes.navItem}><Link to='/'>CONTACT US</Link></li>
              <li className={classes.navItem}><Link to='/donate'>DONATE</Link></li>
          </ul>

          <div className={classes.toggler} onClick={handleToggle}>
            {togglerIcon()}
          </div>
      </nav>
      </header>
      
  )
}

export default MainNavigation;