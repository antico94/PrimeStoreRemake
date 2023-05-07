import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import styles from './header.module.css';
import DarkMode from "../dark-mode/dark-mode";

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleMenuClick = (menuName) => {
        setActiveMenu(menuName);
    };

    const handleFocus = () => {
        setIsInputFocused(true);
    };

    const handleBlur = () => {
        setIsInputFocused(false);
    };

    return (
            <div className={styles.headerContainer}>
                <div className={styles.logoHeader}>
                    <h1 className={styles.logoPrimeText}>PRIME</h1>
                    <h1 className={styles.logoStoreText}>STORE</h1>
                </div>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="Search" onFocus={handleFocus} onBlur={handleBlur} />
                </div>
                {!isInputFocused && (
                    <div className={styles.navigationContainer}>
                        <Link className={`${styles.menuLink} ${activeMenu === 'Products' ? styles.isActive : ''}`} to="/products">
                            Products
                        </Link>
                        <Link className={`${styles.menuLink} ${activeMenu === "Today's Deals" ? styles.isActive : ''}`} to="/deals">
                            Today's Deals
                        </Link>
                        <Link className={`${styles.menuLink} ${activeMenu === 'New Arrivals' ? styles.isActive : ''} ${styles.notify}`} to="/new-arrivals">
                            New Arrivals
                        </Link>
                        <Link className={`${styles.menuLink} ${activeMenu === 'Gift Cards' ? styles.isActive : ''}`} to="/gift-cards">
                            Gift Cards
                        </Link>
                    </div>
                )}
            </div>
    );
};

export default Header;
