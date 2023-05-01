import React from 'react';
import styles from './product-card.module.css'
import headset from "./../../assets/images/headphones.png"
import AddToCart from "../add-to-cart/add-to-cart";

const ProductCard = ({id, description, longDescription, brand, model, productType, productImage, productPrice}) => {
    const basePrice = productPrice.toString().split(".")[0]
    const decimalPrice = productPrice.toString().split(".")[1]
    const formattedPrice = basePrice.toLocaleString('ro-RO', { style: 'currency', currency: 'Lei' }).replace("LEI", "Lei");
    return (
        <div className={styles.productCard}>
            <div className={styles.productImageContainer}>
                <img src={headset} alt={"headset"} className={styles.productImage}/>
            </div>
            <h1 className={styles.productDescription}>{description}</h1>
            <p className={styles.productPrice}>{formattedPrice}<sup className={styles.supPrice}>{decimalPrice}</sup> Lei</p>
            <AddToCart productId={id}/>
        </div>
    );
};

export default ProductCard;