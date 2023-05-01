import React from 'react';
import styles from './add-to-cart.module.css'
import cart from './../../assets/svg/cart.svg'

const AddToCart = ({productId}) => {
    return (
        <div className={styles.addToCardContainer}>
            <img src={cart} alt={"cart"}/>
            <h3>Add to cart</h3>
        </div>
    );
};

export default AddToCart;