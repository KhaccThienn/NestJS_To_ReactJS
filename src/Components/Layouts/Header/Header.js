import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import headerStyle from "./header.module.css";
import Logo from "./Components/Logo/Logo";
import Navbar from "./Components/Navbar/Navbar";
import User from "./Components/User/User";
import DropdownBox from "./Components/User/Components/DropdownBox/DropdownBox";
import SearchBox from "./Components/SearchBox/SearchBox";
import * as ProductService from '../../../Services/ProductService'
import { FaSearch } from "react-icons/fa";

const cx = classNames.bind(headerStyle);

function Header() {
  const [visiable, setVisiable] = useState(false);

  const [keySearch, setKeySearch] = useState("");
  const [showProducts, setShowProducts] = useState([]);
  const resetKeyword = () => {
    setKeySearch("");
  };

  useEffect(() => {
    const filterByKeyName = async (keyWord) => {
      const data = await ProductService.searchData(keyWord);
      setShowProducts(data);
      // console.log(keyWord);
      // console.log(data);
    };
    const timeOut = setTimeout(() => {
      filterByKeyName(keySearch);
    }, 300);
    return () => clearTimeout(timeOut);
  }, [keySearch]);

  return (
    <>
      <div
        className={cx(
          "container-fluid",
          "d-flex",
          "header",
          "align-items-center",
          "justify-content-between"
        )}
      >
        <Logo />
        <Navbar />
        <div className={cx("form")}>
          <form className={cx("d-flex", "align-items-center")}>
            <input
              type="text"
              className={cx("form-control", "form-input")}
              placeholder="Search anything..."
              onChange={(e) => setKeySearch(e.target.value.trim())}
            />
            <FaSearch className={cx("fa-search")} />
          </form>
        </div>
        <div onClick={() => setVisiable(!visiable)}>
          <User />
        </div>
      </div>
      {keySearch !== "" && (
        <SearchBox keyword={keySearch} data={showProducts} reset={resetKeyword} />
      )}
      {visiable && <DropdownBox />}
    </>
  );
}

export default Header;
