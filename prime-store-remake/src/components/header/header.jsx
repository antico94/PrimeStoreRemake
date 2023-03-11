import React, { useState } from 'react';
import styles from './header.module.css';

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
                    <a
                        className={`${styles.menuLink} ${activeMenu === 'Products' ? styles.isActive : ''}`}
                        onClick={() => handleMenuClick('Products')}
                    >
                        Products
                    </a>
                    <a
                        className={`${styles.menuLink} ${activeMenu === "Today's Deals" ? styles.isActive : ''}`}
                        onClick={() => handleMenuClick("Today's Deals")}
                    >
                        Today's Deals
                    </a>
                    <a
                        className={`${styles.menuLink} ${activeMenu === 'New Arrivals' ? styles.isActive : ''} ${styles.notify}`}
                        onClick={() => handleMenuClick('New Arrivals')}
                    >
                        New Arrivals
                    </a>
                    <a
                        className={`${styles.menuLink} ${activeMenu === 'Gift Cards' ? styles.isActive : ''}`}
                        onClick={() => handleMenuClick('Gift Cards')}
                    >
                        Gift Cards
                    </a>
                </div>
            )}
        </div>
    );
};

export default Header;
