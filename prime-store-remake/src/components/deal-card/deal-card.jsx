import React, {useEffect, useState} from 'react';
import styles from "../product-card/product-card.module.css";
import css from './deal-card.module.css'
import {Link} from "react-router-dom";
import AddToCart from "../add-to-cart/add-to-cart";



const DealCard = ({productId, imageUrl, priceNow, priceBefore, title}) => {
    const [mainPriceNow, setMainPriceNow] = useState('0');
    const [secondaryPriceNow, setSecondaryPriceNow] = useState('00');
    const [mainPriceBefore, setMainPriceBefore] = useState('0');
    const [secondaryPriceBefore, setSecondaryPriceBefore] = useState('00');

    useEffect(() => {
        if (priceNow !== undefined && priceBefore !== undefined) {
            const priceInCentsNow = Math.round(Number(priceNow) * 100);
            const [main, secondary] = priceInCentsNow
                .toString()
                .padStart(3, '0')
                .match(/^(\d*)(\d{2})$/)
                ?.slice(1) || ['0', '00'];
            setMainPriceNow(main);
            setSecondaryPriceNow(secondary);

            const priceInCentsBefore = Math.round(Number(priceBefore) * 100);
            const [main2, secondary2] = priceInCentsBefore
                .toString()
                .padStart(3, '0')
                .match(/^(\d*)(\d{2})$/)
                ?.slice(1) || ['0', '00'];
            setMainPriceBefore(main2);
            setSecondaryPriceBefore(secondary2);
        }
    }, [priceNow, priceBefore]);

    return (
        <div className={styles.productCard}>
            <Link to={`/product/${productId}`} className={styles.linkProduct}>
                <div className={styles.productImageContainer}>
                    <img src={imageUrl} alt="product" className={styles.productImage}/>
                </div>
                <div className={styles.productInfo}>
                    <div className={css.priceNow}>
                        <h1 className={styles.productDescription}>{title}</h1>
                        <p className={styles.productPrice}>
                            {mainPriceNow}
                            <sup className={styles.supPrice}>{secondaryPriceNow}</sup> Lei
                        </p>
                    </div>
                    <div className={css.priceBefore}>
                        <p className={styles.productPrice}>
                            <span className={css.strikethrough}>
                                {mainPriceBefore}
                                <sup className={css.supPriceBefore}>{secondaryPriceBefore}</sup> Lei
                            </span>
                        </p>
                    </div>
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