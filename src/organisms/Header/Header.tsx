import React from 'react';
// import slika from '../../assets/slika.png'
import styles from './Header.module.scss'
import classNames from 'classnames';

const cn = classNames.bind(styles);

const Header = () => {
    return (
        <div className={styles.wrapper}>
            {/* <img src={slika}/> */}

            <div className={cn(styles.wrapper, styles.wrapper_svejedno)}></div>
        </div>
    )
}

export default Header;