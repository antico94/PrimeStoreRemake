import React from 'react';
import styles from './product-card.module.css'
import headset from "./../../assets/images/headphones.png"
import AddToCart from "../add-to-cart/add-to-cart";
import {Link} from "react-router-dom";

const ProductCard = ({productId, title, subcategoryId, price, imageUrl}) => {
    const basePrice = price.toString().split(".")[0]
    const decimalPrice = price.toString().split(".")[1]
    const formattedPrice = basePrice.toLocaleString('ro-RO', {
        style: 'currency',
        currency: 'Lei'
    }).replace("LEI", "Lei");
    return (

        <div className={styles.productCard}>
            <Link to={`/product/${productId}`} className={styles.linkProduct}>
                <div className={styles.productImageContainer}>
                    <img src={imageUrl} alt={"headset"} className={styles.productImage}/>
                </div>
                <div className={styles.productInfo}>
                    <h1 className={styles.productDescription}>{title}</h1>
                    <p className={styles.productPrice}>{formattedPrice}<sup
                        className={styles.supPrice}>{decimalPrice}</sup> Lei</p>
                </div>
            </Link>
            <div className={styles.cartContainer}>
                <AddToCart productId={productId}/>
            </div>

        </div>
    );
};

export default ProductCard;