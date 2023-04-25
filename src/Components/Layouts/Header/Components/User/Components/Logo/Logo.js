import React from "react";
import classNames from "classnames/bind";

import logoStl from "./logo.module.css";
import { FaUserCircle } from "react-icons/fa";

const cx = classNames.bind(logoStl);

function Logo() {
  return (
    <div className={cx("logo", "w-50")}>
      <FaUserCircle />
    </div>
  );
}

export default Logo;
