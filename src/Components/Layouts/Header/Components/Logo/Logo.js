import React from 'react'
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import logoStl from './logo.module.css';



const cx = classNames.bind(logoStl);

function Logo() {
  return (
    <Link to={'/'} className={cx('logo')}>
      <img className={cx('card-img')} src='/images/Airbnb_Logo.png' alt='Logo Page' />
    </Link>
  )
}

export default Logo