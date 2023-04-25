/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import navStl from "./navbar.module.css";

const cx = classNames.bind(navStl);

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={cx("navbar-nav", "mr-auto")}>
            <li className={cx("nav-item")}>
              <Link className={cx("nav-link")} to={"/"}>
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className={cx("nav-item")}>
              <Link className={cx("nav-link")} to={"/about"}>
                About
              </Link>
            </li>
            <li className={cx("nav-item")}>
              <Link className={cx("nav-link")} to={"/shop"}>
                Shop
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
