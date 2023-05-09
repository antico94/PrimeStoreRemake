import React, {useContext} from 'react';
import styles from './add-to-cart.module.css'
import cart from './../../assets/svg/cart.svg'
import {CartContext} from "../../context-provider/cart-context-provider";

const AddToCart = ({productId, price, imageUrl, title}) => {
    const {addToCart} = useContext(CartContext);
    return (
        <button className={styles.addToCardContainer} onClick={() => addToCart(productId, title, price, imageUrl)}>
            <img src={cart} alt={"cart"}/>
            <h3>Add to cart</h3>
        </button>
    );
};

export default AddToCart;