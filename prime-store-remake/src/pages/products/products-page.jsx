import React from 'react';
import ProductCard from "../../components/product-card/product-card";
import styles from './products-page.module.css'

const ProductsPage = ({data}) => {
    if (data.length > 0){
        return (
            <div className={styles.productsList}>
                {data.map((el) => (
                    <ProductCard key={el.productId} {...el} />
                ))}
            </div>
        );
    }
    else{
        return(
            <div className={styles.productsList}>
                <h1>No results found</h1>
            </div>
        )
    }
};

export default ProductsPage;
