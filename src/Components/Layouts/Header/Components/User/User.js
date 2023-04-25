import React from "react";
import Logo from "./Components/Logo/Logo";

import classNames from "classnames/bind";

import userStl from "./user.module.css";

const cx = classNames.bind(userStl);

function User() {
  return (
    <>
      <div
        className={cx(
          "d-flex",
          "align-items-center",
          "user-logo",
          "justify-content-between"
        )}
      >
        <Logo />
      </div>
    </>
  );
}

export default User;
