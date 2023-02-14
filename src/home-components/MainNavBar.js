import React from 'react'
import NavBarBtn from './servantcomponent/NavBarBtn';
import SearchBar from '../general-components/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCartShopping,
  faGlobe,
  faList,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Logo from './servantcomponent/Logo';

library.add(faCartShopping, faGlobe, faList, faMagnifyingGlass);

function MainNavBar() {
  return (
    <>
      <div className="nav-bar-container">
        <div className="icon small">
          <button className="list_icon">
            <FontAwesomeIcon icon="fa-list" />
          </button>
        </div>
        <div className="udemy_logo small">
          <img
            className="small_logo"
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt="Udemy"
          />
        </div>

        <div className="icon small">
          <button id="search_small" className="list_icon">
            <FontAwesomeIcon icon="magnifying-glass" />
          </button>
        </div>
        <div className="icon small">
          <button className="cart_icon list_icon">
            <FontAwesomeIcon icon="fa-cart-shopping" />
          </button>
        </div>
        <Logo
          source="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          type="nav-bar-logo nav-bar"
          alternative="udemy logo"
        />

        <NavBarBtn title="Catigories" type="nav-bar-btn-1 nav-bar" />
        <SearchBar plaseholder="search for any thing" />
        <NavBarBtn title="Udemy Business" type="nav-bar-btn-1 media_1080" />
        <NavBarBtn title="Teach on Udemy" type="nav-bar-btn-1 media_915" />
        <NavBarBtn
          title={<FontAwesomeIcon icon="fa-cart-shopping" />}
          type="nav-bar-btn-1 nav-bar"
        />
        <NavBarBtn title={"Sign up"} type="nav-bar-btn-2 sign-up  nav-bar" />
        <NavBarBtn title={"Log in"} type="nav-bar-btn-2 log-in  nav-bar" />
        <NavBarBtn
          title={<FontAwesomeIcon icon="fa-solid fa-globe" />}
          type="nav-bar-btn-2 lang-btn  nav-bar"
        />
      </div>
    </>
  );
}

export default MainNavBar