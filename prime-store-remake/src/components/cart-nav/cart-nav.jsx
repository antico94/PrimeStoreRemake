import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import cart from "../../assets/svg/cart.svg";
import styles from "./cart-nav.module.css"
import {CartContext} from "../../context-provider/cart-context-provider";

const CartNav = () => {
    const {cartItems} = useContext(CartContext)
    return (
        <div className={styles.menuLinkCartContainer}>
            <Link
                className={`${styles.menuLink} ${styles.menuLinkCart} ${cartItems.length > 0 ? styles.notify : ""}`}
                to="/cart">
                <img src={cart} className={styles.cartIcon} alt="cart" />
                Cart
            </Link>
        </div>
    );
};

export default CartNav;