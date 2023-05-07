import React from 'react';
import ProductCard from "../../components/product-card/product-card";
import styles from './products-page.module.css'

const ProductsPage = () => {
    const products = [
        {
            "productId": 254,
            "title": "Acumulator extern Varta 57978 ENERGY 20000 mAh",
            "subcategoryId": 2,
            "price": 154.70,
            "imageUrl": "https://s13emagst.akamaized.net/products/43576/43575518/images/res_78addb43ae3f5118f6b1e5047ec416f6.jpg?width=720&height=720&hash=8AE51BD3370DB3945C93DD1857D9D2D1"
        },
        {
            "productId": 255,
            "title": "Acumulator extern Varta 57976 ENERGY 10000 mAh",
            "subcategoryId": 2,
            "price": 94.01,
            "imageUrl": "https://s13emagst.akamaized.net/products/43576/43575516/images/res_8d92647f14afe193cfc3a18552817b36.jpg?width=720&height=720&hash=1DED017821E454A7F6FF39B5503FB148"
        },
        {
            "productId": 256,
            "title": "Pastile Marirea Penisului Big Boy Golden XXL 45buc",
            "subcategoryId": 2,
            "price": 85.68,
            "imageUrl": "https://s13emagst.akamaized.net/products/20026/20025750/images/res_d1e3452e4be7e64ef0e9b4aaa24fb21e.jpg?width=720&height=720&hash=51502A18C26903F8E316F5652F928300"
        },
        {
            "productId": 257,
            "title": "Stylus Touch Pen, Sigloo, Activ, Profesional, pentru Android tablets and smartphones, 3pro Universal, 2 penite anti-zgarieturi, functie Palm Rejection, Tilt pressure, Lag-Free, Magnetic, USB-C, Culoare Alba",
            "subcategoryId": 2,
            "price": 124.99,
            "imageUrl": "https://s13emagst.akamaized.net/products/51958/51957100/images/res_9029bc59f7d4b98b1727e4fd537daf4b.jpg?width=720&height=720&hash=204BEC22013FF4E8C0836E2F7F5E42AE"
        },
        {
            "productId": 258,
            "title": "Acumulator extern Varta 57977 ENERGY 15000 mAh",
            "subcategoryId": 2,
            "price": 119.99,
            "imageUrl": "https://s13emagst.akamaized.net/products/43576/43575519/images/res_35d801a0688b5ae8c75fc3df0ed8241a.jpg?width=720&height=720&hash=ECEC0BFEA94CBDDC9BDD64FE72A5C296"
        },
        {
            "productId": 259,
            "title": "Tableta Ciocolata, Anthon Berg LIQ Mini Tablets Mix, 100 g",
            "subcategoryId": 2,
            "price": 20.89,
            "imageUrl": "https://s13emagst.akamaized.net/products/40640/40639968/images/res_6834c002c9d7de4a7bb173482a16f860.jpg?width=720&height=720&hash=4BD9737FBDC7DD43F6328B447F32C9C4"
        },
        {
            "productId": 260,
            "title": "Acumulator extern Varta 57975 ENERGY 5000 mAh",
            "subcategoryId": 2,
            "price": 77.35,
            "imageUrl": "https://s13emagst.akamaized.net/products/43576/43575515/images/res_9ae6fe15e9d85d80e4f2d3af36fba38e.jpg?width=720&height=720&hash=A4FC9D3E327487CC021069B8A3C99D29"
        },
        {
            "productId": 261,
            "title": "Tablete Cofeina, Caffeine Tablets, Caffeine 100 Capsule - Scitec Nutrition",
            "subcategoryId": 2,
            "price": 53.90,
            "imageUrl": "https://s13emagst.akamaized.net/products/15506/15505158/images/res_f9f77072f0ebb2da42d6353d23972071.jpg?width=720&height=720&hash=662319CEA9C5248B0F8DE0B218D54FFD"
        },
        {
            "productId": 262,
            "title": "NOW FOODS Vitamin C-500 (Vitamin C with Rose Hips) Immunity Support, 250 tablets",
            "subcategoryId": 2,
            "price": 79.81,
            "imageUrl": "https://s13emagst.akamaized.net/products/29266/29265382/images/res_87bbd311f8f7fad868351dbd63f4bff5.jpg?width=720&height=720&hash=A4C49004D2981F5A7D28A42413100842"
        },
        {
            "productId": 263,
            "title": "Tablete brom Spa(20g), SpaTime, Bromine Tablets 0.8 kg",
            "subcategoryId": 2,
            "price": 169.99,
            "imageUrl": "https://s13emagst.akamaized.net/products/3080/3079778/images/res_99640fccca38b3b2d112a3d285539c6e.jpg?width=720&height=720&hash=90594E2795DFD56BF562061B8C4CA02E"
        }
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