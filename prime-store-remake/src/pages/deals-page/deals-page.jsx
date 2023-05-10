import React from 'react';
import styles from "../products/products-page.module.css";
import DealCard from "../../components/deal-card/deal-card";

const DealsPage = ({data}) => {
    if (data && data.length > 0) {  // check if data is not null/undefined
        return (
            <div className={styles.productsList}>
                {data.map((el) => (
                    <DealCard key={'deal-' + (el.productId ? el.productId.toString() : '')} {...el} />
                ))}
            </div>
        );
    } else {
        return (
            <div className={styles.productsList}>
                <h1>No results found</h1>
            </div>
        )
    }
};

export default DealsPage;
