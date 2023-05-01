import React from 'react';
import styles from './content-manager.module.css'
import ProductsPage from "../../pages/products/products-page";
import Subcategories from "../../pages/subcategories/subcategories";

const ContentManager = () => {
    return (
        <div className={styles.contentManager}>
            <Subcategories/>
        </div>
    );
};

export default ContentManager;