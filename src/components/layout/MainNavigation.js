import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import classes from "./MainNavigation.module.css";
import Logo from "../images/logo-lions-rabat-elites.jpg";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";

function MainNavigation() {
  const [toggleActive, setToggleActive] = useState(false);
  const handleToggle = () => setToggleActive(!toggleActive);

  function navMenu() {
    return toggleActive
      ? classNames(classes.navMenu, classes.active)
      : classes.navMenu;
  }

  function displayToggle() {
    return toggleActive ? <FaTimes size={30} /> : <FaBars size={30} />;
  }

  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <ul className={navMenu()}>
        <li><NavLink className={classes.navItem}
          to="/"
          //activeClassName={classes.selected}
          exact
          onClick={handleToggle}
        >
          ABOUT US
        </NavLink></li>
        <li><NavLink className={classes.navItem}
          to="/about-us"
          //activeClassName={classes.selected}
          onClick={handleToggle}
        >
          CONTACT US
        </NavLink></li>
        <li><NavLink className={classes.navItem}
          to="/donate"
          //activeClassName={classes.selected}
          onClick={handleToggle}
        >
          DONATE
        </NavLink></li>
      </ul>

      <div className={classes.toggler} onClick={handleToggle}>
        {displayToggle()}
      </div>
    </div>
  );
}

export default MainNavigation;