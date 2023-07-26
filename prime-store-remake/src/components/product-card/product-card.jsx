import React from 'react';
import styles from './product-card.module.css';
import AddToCart from '../add-to-cart/add-to-cart';
import {Link} from 'react-router-dom';

const ProductCard = ({productId, title, price, imageUrl}) => {
    const priceInCents = Math.round(Number(price) * 100);
    const [mainPrice, secondaryPrice] = priceInCents
        .toString()
        .padStart(3, '0')
        .match(/^(\d*)(\d{2})$/)
        ?.slice(1) || ['0', '00'];

    return (
        <div className={styles.productCard}>
            <Link to={`/product/${productId}`} className={styles.linkProduct}>
                <div className={styles.productImageContainer}>
                    <img src={imageUrl} alt="product" className={styles.productImage}/>
                </div>
                <div className={styles.productInfo}>
                    <h1 className={styles.productDescription}>{title}</h1>
                    <p className={styles.productPrice}>
                        {mainPrice}
                        <sup className={styles.supPrice}>{secondaryPrice}</sup> Lei
                    </p>
                </div>
            </Link>
            <div className={styles.cartContainer}>
                <AddToCart key={'cart' - productId} productId={productId} title={title} price={price}
                           imageUrl={imageUrl}/>
            </div>
        </div>
    );
};

export default ProductCard;
