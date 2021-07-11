import React from 'react';
// import slika from '../../assets/slika.png'
import styles from './Header.module.scss';
import classNames from 'classnames';
import logo from '../../assets/download.png';
import logoTwo from '../../assets/download.png';
import ball from '../../assets/ImgPlaceHolder.png';
import twitter from '../../assets/twitter-logo-button.png';
import instagram from '../../assets/instagram-logo-1.png';
import facebook from '../../assets/facebook-logo-button.png'
const cn = classNames.bind(styles);

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <img className={styles.logo} src={logo} alt="logo" />
        <img className={styles.logo} src={logo} alt="logo"></img>
        <div className={styles.navigation_items}>
          <a href="google.com">Über</a>
          <a href="google.com">News</a>
          <a href="google.com">Vision</a>
          <a href="google.com">Social</a>
          <a href="google.com">Location</a>
          <a href="google.com">Anfahr</a>

          <img className={styles.icons} src={instagram}/>
          <img className={styles.icons} src={facebook}/>
          <img className={styles.icons} src={twitter}/>
          
          
        </div>
      </div>
      <div className={styles.navigation}>
        <h1 className={styles.title}>KÖLSCHES</h1>
        <h1 className={styles.title_bellow}>TENNISTAINMENT</h1>
        <img className={styles.ball} src={ball} alt="ball" />
      </div>
      <div>
        <div className={styles.newsletter_button}>eee</div>
      </div>
    </div>
  );
};

export default Header;
