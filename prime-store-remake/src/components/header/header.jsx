import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState('');

    const handleMenuClick = (menuName) => {
        setActiveMenu(menuName);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchKeyword) {
            window.location.href = `/product/search/${searchKeyword}`;
        }
    };

    return (
        <div className={styles.headerContainer}>
            <div className={styles.logoHeader}>
                <h1 className={styles.logoPrimeText}>PRIME</h1>
                <h1 className={styles.logoStoreText}>STORE</h1>
            </div>
            <form onSubmit={handleSearchSubmit}>

                <div className={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchKeyword}
                        onChange={(event) => setSearchKeyword(event.target.value)}
                    />
                </div>
            </form>

            <div className={styles.navigationContainer}>
                <Link className={`${styles.menuLink} ${activeMenu === 'Products' ? styles.isActive : ''}`}
                      to="/products/all">
                    Products
                </Link>
                <Link className={`${styles.menuLink} ${activeMenu === "Today's Deals" ? styles.isActive : ''}`}
                      to="/deals">
                    Today's Deals
                </Link>
                <Link
                    className={`${styles.menuLink} ${activeMenu === 'New Arrivals' ? styles.isActive : ''} ${styles.notify}`}
                    to="/new-arrivals">
                    New Arrivals
                </Link>
                <Link className={`${styles.menuLink} ${activeMenu === 'Gift Cards' ? styles.isActive : ''}`}
                      to="/gift-cards">
                    Gift Cards
                </Link>
            </div>
        </div>
    );
};

export default Header;
