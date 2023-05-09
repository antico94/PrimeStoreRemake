import React from 'react';
import styles from "../product-card/product-card.module.css";
import {Link} from "react-router-dom";
import AddToCart from "../add-to-cart/add-to-cart";

const DealCard = ({productId, imageUrl, priceNow, priceBefore, title}) => {
    const priceInCents = Math.round(Number(priceNow) * 100);
    const [mainPrice, secondaryPrice] = priceInCents
        .toString()
        .padStart(3, '0')
        .match(/^(\d*)(\d{2})$/)
        ?.slice(1) || ['0', '00'];
    const priceBeforeInCents = Math.round(Number(priceBefore) * 100);
    const [mainPriceBefore, secondaryPriceBefore] = priceBeforeInCents
        .toString()
        .padStart(3, '0')
        .match(/^(\d*)(\d{2})$/)
        ?.slice(1) || ['0', '00'];
    const priceBeforeContent = priceBefore ? (
        <div className={styles.priceBefore}>
            <p className={styles.productPrice}>
                {mainPriceBefore}
                <sup className={styles.supPrice}>{secondaryPriceBefore}</sup> Lei
            </p>
        </div>
    ) : null;

    return (
        <div className={styles.productCard}>
            <Link to={`/product/${productId}`} className={styles.linkProduct}>
                <div className={styles.productImageContainer}>
                    <img src={imageUrl} alt="product" className={styles.productImage}/>
                </div>
                <div className={styles.productInfo}>
                    <div className={styles.priceNow}>
                        <h1 className={styles.productDescription}>{title}</h1>
                        <p className={styles.productPrice}>
                            {mainPrice}
                            <sup className={styles.supPrice}>{secondaryPrice}</sup> Lei
                        </p>
                    </div>
                    {priceBeforeContent}
                </div>
            </Link>
            <div className={styles.cartContainer}>
                <AddToCart key={'cart' - productId} productId={productId} title={title} price={priceNow}
                           imageUrl={imageUrl}/>
            </div>
        </div>
    );
};

export default DealCard;
