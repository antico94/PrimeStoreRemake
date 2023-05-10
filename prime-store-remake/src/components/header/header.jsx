import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import CartNav from '../cart-nav/cart-nav';

const Header = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [hasViewedNewArrivals, setHasViewedNewArrivals] = useState(
        localStorage.getItem('hasViewedNewArrivals') === 'true'
    );

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchKeyword) {
            window.location.href = `/product/search/${searchKeyword}`;
        }
    };

    useEffect(() => {
        if (!hasViewedNewArrivals) {
            localStorage.setItem('hasViewedNewArrivals', true);
        }
    }, [hasViewedNewArrivals]);

    return (
        <div className={styles.headerContainer}>
            <Link to={'/'} className={styles.logoHeader}>
                <h1 className={styles.logoPrimeText}>PRIME</h1>
                <h1 className={styles.logoStoreText}>STORE</h1>
            </Link>
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
            <div className={styles.navigationFlex}>
                <div className={styles.navigationContainer}>
                    <Link className={`${styles.menuLink}`} to="/products/all">
                        Products
                    </Link>
                    <Link className={`${styles.menuLink}`} to="/deals">
                        Today's Deals
                    </Link>
                    <Link
                        className={`${styles.menuLink} ${
                            hasViewedNewArrivals ? '' : styles.notify
                        }`}
                        to="/new-arrivals"
                        onClick={() => setHasViewedNewArrivals(true)}
                    >
                        New Arrivals
                    </Link>
                    <Link className={`${styles.menuLink}`} to="/gift-cards">
                        Gift Cards
                    </Link>
                </div>
                <CartNav />
            </div>
        </div>
    );
};

export default Header;
