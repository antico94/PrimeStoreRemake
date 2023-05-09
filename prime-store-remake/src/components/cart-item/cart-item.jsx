import React, {useContext} from 'react';
import styles from './cart-item.module.css'
import {CartContext} from "../../context-provider/cart-context-provider";
import bin from './../../assets/svg/delete.svg'
import DeleteButton from "../delete-button/delete-button";

const CartItem = ({productId, title, imageUrl, subcategoryId, price}) => {
    const {cartItems, increaseQuantity, decreaseQuantity, removeFromCart, clearCart} = useContext(CartContext)
    const quantity = cartItems.find((item) => item.productId === productId)?.quantity || 0;
    console.log(cartItems)

    return (
        <div className={styles.cartItemContainer}>
            <div className={styles.productImage}>
                <img src={imageUrl} alt={title} className={styles.cartItemImage}/>
            </div>
            <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{title}</h3>
                <p className={styles.productPrice}>{price} Lei</p>
                <p className={styles.productPrice}>Warranty: 24 Months</p>
                <p className={styles.productPrice}>Availability: In stock</p>
                <p className={styles.productPrice}>Delivery and processing cost: Free</p>
            </div>
            <div className={styles.productControls}>
                <button className={styles.quantityButton} onClick={() => increaseQuantity(productId)}>+</button>
                <span className={styles.quantity}>{quantity}</span>
                <button className={`${styles.quantityButton} ${styles.minusBtn}`}
                        onClick={() => decreaseQuantity(productId)}>-
                </button>
                <DeleteButton productId={productId}/>
            </div>
        </div>
    );
};

export default CartItem;