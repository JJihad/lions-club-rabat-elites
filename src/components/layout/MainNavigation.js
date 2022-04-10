
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import classes from './MainNavigation.module.css';
import Logo from "../images/logo-lions-rabat-elites.jpg";
import { Link } from "react-router-dom";
import classNames from "classnames";

function MainNavigation() {
    const [toggleActive, setToggleActive] = useState(false);
    const handleToggle = () => setToggleActive(!toggleActive);

  function navMenu() {
    return toggleActive ? classNames(classes.navMenu, classes.active) : classes.navMenu;
}

function displayToggle() {
  return toggleActive ? (<FaTimes size={30} />) : (<FaBars size={30} />);
}
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <ul className={navMenu()}>
        <li className={classes.navItem}>
          <Link to="/" onClick={handleToggle}>ABOUT US</Link>
        </li>
        <li className={classes.navItem}>
          <Link to="/" onClick={handleToggle}>CONTACT US</Link>
        </li>
        <li className={classes.navItem}>
          <Link to="/donate" onClick={handleToggle}>DONATE</Link>
        </li>
      </ul>

      <div className={classes.toggler} onClick={handleToggle}>
      {displayToggle()}
      </div>
    </div>
  );
}

export default MainNavigation;