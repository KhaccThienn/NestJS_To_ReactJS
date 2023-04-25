import React from 'react'
import classNames from 'classnames/bind'

import style from './carousel.module.css';

const cx = classNames.bind(style);

function Carousel() {
  return (
    <div className={cx('banner')}>
        <div id="carouselId" className={cx("carousel", "slide")} data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselId" data-slide-to="0" className="active"></li>
                <li data-target="#carouselId" data-slide-to="1"></li>
                <li data-target="#carouselId" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <img src="/images/banner/anigirl.jpg" className={cx('card-img')} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img src="/images/banner/kiminonamewa.jpg" className={cx('card-img')} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img src="/images/banner/tamako.jpg" className={cx('card-img')}  alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
  )
}

export default Carousel