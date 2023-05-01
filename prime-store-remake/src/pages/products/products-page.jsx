import React from 'react';
import ProductCard from "../../components/product-card/product-card";
import styles from './products-page.module.css'

const ProductsPage = () => {
    const products = [
        {
            id: 0,
            description: "Casti gaming profesionale Runmus® K3, cu microfon, control volum, perne moi, sistem surround HD, microfon cu anulare zgomot de fond, cu lumina led, pentru PC, PS4, Xbox, Nitendo, difuzor 50mm, 106dB, albastru",
            longDescription: "long descriptiuon",
            brand: "Acer",
            productPrice: 5699.99,
            productImage: "linik",
            model: "ZX550",
            productType: "monitor"
        },
        {
            id: 1,
            description: "L",
            longDescription: "long descriptiuon",
            brand: "Acer",
            productPrice: 5699.99,
            productImage: "linik",
            model: "ZX550",
            productType: "monitor"
        },
        {
            id: 2,
            description: "L",
            longDescription: "long descriptiuon",
            brand: "Acer",
            productPrice: 5699.99,
            productImage: "linik",
            model: "ZX550",
            productType: "monitor"
        },
        {
            id: 3,
            description: "L",
            longDescription: "long descriptiuon",
            brand: "Acer",
            productPrice: 5699.99,
            productImage: "linik",
            model: "ZX550",
            productType: "monitor"
        },
        {
            id: 4,
            description: "L",
            longDescription: "long descriptiuon",
            brand: "Acer",
            productPrice: 5699.99,
            productImage: "linik",
            model: "ZX550",
            productType: "monitor"
        },
        {
            id: 5,
            description: "L",
            longDescription: "long descriptiuon",
            brand: "Acer",
            productPrice: 5699.99,
            productImage: "linik",
            model: "ZX550",
            productType: "monitor"
        },
    ]
    return (
        <div className={styles.productsList}>
            {products.map(
                el => {
                    return ProductCard(el)
                }
            )}
        </div>
    );
};

export default ProductsPage;