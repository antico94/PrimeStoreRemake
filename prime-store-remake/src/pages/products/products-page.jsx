import React from 'react';
import ProductCard from "../../components/product-card/product-card";
import styles from './products-page.module.css'

const ProductsPage = ({data}) => {
    return (
        <div className={styles.productsList}>
            {data.map(
                el => {
                    return ProductCard(el)
                }
            )}
        </div>
    );
};

export default ProductsPage;