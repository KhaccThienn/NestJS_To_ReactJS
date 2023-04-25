/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import classNames from "classnames/bind";
import style from "./dropdown.module.css";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function DropdownBox() {
  return (
    <div className={cx("dropdownbox")}>
      <Link className={cx("dropdown-item", 'drop')} to={"/profile"}>
        Profile
      </Link>
      <div className="dropdown-divider"></div>
      <Link className={cx("dropdown-item", 'drop')} to={"/sign-up"}>
        Sign Up
      </Link>
      <Link className={cx("dropdown-item", 'drop')} to={"/sign-in"}>
        Login
      </Link>
      <Link className={cx("dropdown-item", 'drop')} to={"/sign-out"}>
        Log Out
      </Link>
    </div>
  );
}

export default DropdownBox;
