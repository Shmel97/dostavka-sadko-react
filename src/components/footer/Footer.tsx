import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../image/logo.png';
import { Link } from 'react-router-dom';
import { SlSocialInstagram, SlSocialVkontakte } from 'react-icons/sl';
import { BsWhatsapp } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { BsTelephone } from 'react-icons/bs';

function Footer() {
  return (
    <div className={styles.footer}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <div className={styles.social}>
        <a href="https://www.instagram.com/cafe_sadko/">
          <SlSocialInstagram />
        </a>
        <a href="https://vk.com/cafesadko">
          <SlSocialVkontakte />
        </a>
        <a>
          <BsWhatsapp />
        </a>
      </div>
      <div className={styles.contacts}>
        <div className={styles.telephone}>
          <BsTelephone />
          <p>+7 (904) 095-19-99</p>
        </div>
        <div className={styles.location}>
          <CiLocationOn />
          <p>г.Губкин, ул. Лазарева, д. 5А</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
