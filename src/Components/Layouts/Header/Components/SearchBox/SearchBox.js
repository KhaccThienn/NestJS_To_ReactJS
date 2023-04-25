import React from "react";
import classNames from "classnames/bind";
import style from "./searchbox.module.css";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function SearchBox({ keyword, data, reset }) {

  const slugFormat = (uri) => {
    return uri.toString().replaceAll(' ', '-')
  }

  return (
    <div className={cx("")}>
      <div className={cx("box-search1", "d-lg-block d-none", "ml-5")}>
        <p className={cx("p-result", "pt-3", "font-weight-bold")}>
          Tìm kiếm: "{keyword}"
        </p>
        {data.map((item, i) => {
          return (
            <Link
              className={cx("linkitem")}
              key={i}
              to={`/detail/${slugFormat(item.name)}_${item.id}`}
              onClick={reset}
            >
              <div className={cx("media", "form-item")} key={item.id}>
                {/* <img src={item.main_image} alt="" className={cx('img-search')} /> */}
                <div className={cx("media-body")}>
                  <h5 className={cx("fontname", "pt-3")}>{item.name}</h5>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SearchBox;
