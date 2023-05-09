import React from 'react';
import {Link} from "react-router-dom";
import cart from "../../assets/svg/cart.svg";
import styles from "./cart-nav.module.css"

const CartNav = () => {
    return (
        <div className={styles.menuLinkCartContainer}>
            <Link
                className={`${styles.menuLink} ${styles.menuLinkCart}`}
                to="/cart">
                <img src={cart} className={styles.cartIcon} alt="cart" />
                Cart
            </Link>
        </div>
    );
};

export default CartNav;