/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
// add the comment in each line for this fike
import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./shop.module.css";
import { useNavigateSearch } from "../../../hooks";

import * as ProductService from "../../../Services";
import * as CategoryService from "../../../Services";

const cx = classNames.bind(style);

function Shop() {
  // init the state of all product
  const [allProd, setAllProd] = useState([]);

  // init the state of all category
  const [categories, setCategories] = useState([]);

  // init the state of filter values
  const initState = {};
  const [filterValues, setFilterValues] = useState(initState);

  const [keySearch, setKeySearch] = useState("");

  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  const navigateSearch = useNavigateSearch();

  const handleSubmit = () => {
    navigateSearch("/shop", { ...filterValues });
    // navigateSearch("/shop", { ...filterValues, price: priceRange.min + '-' + priceRange.max });
  };

  const clearFilter = () => {
    navigateSearch("/shop", initState);
    setKeySearch("");
  };

  const queryParams = new URLSearchParams(window.location.search).toString();

  const handleChange = async (e) => {
    const { name, value } = await e.target;
    setFilterValues({ ...filterValues, [name]: value });
  };

  const handleChangePrice = async (e) => {
    const { name, value } = await e.target;

    if (name === "min")
      setPriceRange((priceRange) => ({
        ...priceRange,
        min: value,
      }));

    if (name === "max")
      setPriceRange((priceRange) => ({
        ...priceRange,
        max: value,
      }));

    setFilterValues({
      ...filterValues,
      price: `${priceRange.min}-${priceRange.max}`,
    });
  };


  useEffect(() => {
    const getAllProduct = async () => {
      const data = await ProductService.getProdByReq(queryParams);
      const cates = await CategoryService.getAllCategory();
      setAllProd(data);
      setCategories(cates);
    };
    getAllProduct();
  }, [queryParams]);

  return (
    <div className="container-fluid">
      <div className="row p-4">
        <div className="col-lg-3">
          <button className="btn btn-outline-warning" onClick={clearFilter}>
            Clear Filter
          </button>
          <div className="form-group">
            <label htmlFor="s">Find product: </label>
            <input
              type="text"
              name="s"
              id="s"
              // value={keySearch}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>By Category: </label>
            <select
              className="custom-select"
              onChange={handleChange}
              name="cate"
              id="cate"
            >
              <option value="">All</option>

              {categories.map((e, i) => {
                return (
                  <option key={i} value={e.id}>
                    {e.name}
                  </option>
                );
              })}
            </select>
          </div>

          <label>By Product's Price</label>
          <div className={cx("form-range", "form-group")}>
            <input
              type="text"
              pattern="[0-9]*"
              className="form-control"
              // value={minPrice}
              name="min"
              // onChange={(e) => setPriceRange({
              //   min: e.target.value,
              //   max: priceRange.max
              // })}
              onChange={handleChangePrice}
            />
            <span>-</span>
            <input
              type="text"
              pattern="[0-9]*"
              className="form-control"
              // value={maxPrice}
              name="max"
              // onChange={(e) => setMaxPrice(e.target.value)}
              onChange={handleChangePrice}
              // onChange={(e) => setPriceRange({
              //   min: priceRange.min,
              //   max: e.target.value
              // })}
            />
          </div>
          <button
            className={cx("mt-3", "btn", "btn-outline-success", "btn-block")}
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </div>
        <div className="col-lg-9">
          <div className="row">
            {allProd &&
              allProd.map((e, i) => {
                return (
                  <div className="card col-lg-3" key={i}>
                    <img
                      className="card-img-top"
                      src={`http://localhost:8888/uploads/${e.image}`}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{e.name}</h5>
                      <p className="card-text">{e.price}</p>
                      <p className="card-text">{e.sale_price}</p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
