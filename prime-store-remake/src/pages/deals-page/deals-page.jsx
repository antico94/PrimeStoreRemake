import React from 'react';
import styles from "../products/products-page.module.css";
import DealCard from "../../components/deal-card/deal-card";

const DealsPage = ({data}) => {
    if (data.length > 0) {
        return (
            <div className={styles.productsList}>
                {data.map((el) => (
                    <DealCard key={'deal-' + el.productId.toString()} {...el} />
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