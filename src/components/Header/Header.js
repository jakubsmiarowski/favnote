import React from 'react';
import Button from '../Button/Button';
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss'

const Header = () => (
    <header className={styles.wrapper}>
        <p className={styles.logo}>FavNote.</p>
        <HeaderNavigation />
        <Button secondary>new item</Button>
    </header>
)

export default Header;