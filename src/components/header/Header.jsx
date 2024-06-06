import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import { IoLogoIonitron } from "react-icons/io";

// useSelector - input

const Header = () => {
  let { pathname } = useLocation();

  let count = useSelector((state) => state.cart.value).length;
  let wishlistCount = useSelector((state) => state.wishlist.value).length;

  if (pathname.includes("admin")) {
    return <></>;
  }
  return (
    <header className="header">
      <div className="container header__container">
        <IoLogoIonitron className="header__logo" />

        <ul className="header__list">
          <NavLink className="header__link" to={"/"}>
            Home
          </NavLink>
          <NavLink className="header__link" to={"/wishlist"}>
            <span>Wishlist</span>
            {wishlistCount ? <sup>{wishlistCount}</sup> : <></>}
          </NavLink>
          <NavLink className="header__link" to={"/cart"}>
            <span>Cart</span>
            <sup>{count}</sup>
          </NavLink>
          <NavLink className="header__link" to={"/admin"}>
            Admin
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
