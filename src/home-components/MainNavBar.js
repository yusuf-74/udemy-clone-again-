import React from 'react'
import NavBarBtn from './servantcomponent/NavBarBtn';
import SearchBar from '../general-components/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartShopping , faGlobe } from '@fortawesome/free-solid-svg-icons';
import Logo from './servantcomponent/Logo';

library.add(faCartShopping,faGlobe);

function MainNavBar() {
  return (
    <>
      <div className="nav-bar-container">
        <Logo
          source="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          type="nav-bar-logo"
          alternative = "udemy logo"
        />
        
        <NavBarBtn title="Catigories" type="nav-bar-btn-1" />
        <SearchBar plaseholder="search for any thing" />
        <NavBarBtn title="Udemy Business" type="nav-bar-btn-1" />
        <NavBarBtn title="Teach on Udemy" type="nav-bar-btn-1" />
        <NavBarBtn
          title={<FontAwesomeIcon icon="fa-cart-shopping" />}
          type="nav-bar-btn-1"
        />
        <NavBarBtn title={"Sign up"} type="nav-bar-btn-2 sign-up" />
        <NavBarBtn title={"Log in"} type="nav-bar-btn-2 log-in" />
        <NavBarBtn
          title={<FontAwesomeIcon icon="fa-solid fa-globe" />}
          type="nav-bar-btn-2 lang-btn"
        />
      </div>
    </>
  );
}

export default MainNavBar