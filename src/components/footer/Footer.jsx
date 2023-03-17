import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../image/logo.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className={styles.footer}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
    </div>
  );
}

export default Footer;
