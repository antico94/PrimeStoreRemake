import React, {useContext} from 'react';
import styles from './cart-page.module.css';
import {CartContext} from "../../context-provider/cart-context-provider";
import CartItem from "../../components/cart-item/cart-item";

const ViewCart = () => {
    const {cartItems} = useContext(CartContext)
    return (
        <div className={styles.viewCart}>
            <div className={styles.viewCartLeft}>
                {cartItems.map(item => (
                    <CartItem
                        key={`cart-item-${item.productId}`}
                        productId={item.productId}
                        title={item.title}
                        imageUrl={item.imageUrl}
                        price={item.price}
                    />
                ))}
            </div>
            <div className={styles.viewCartRight}>

            </div>
        </div>
    );
};

export default ViewCart;
