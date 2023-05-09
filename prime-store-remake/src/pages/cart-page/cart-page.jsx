import React, { useContext } from 'react';
import styles from './cart-page.module.css';
import { CartContext } from '../../context-provider/cart-context-provider';
import CartItem from '../../components/cart-item/cart-item';
import cart from "../../assets/svg/cart.svg";

const ViewCart = () => {
    const { cartItems, clearCart } = useContext(CartContext);
    const totalProductCost = cartItems.reduce(
        (accumulator, currentItem) => accumulator + currentItem.price * currentItem.quantity,
        0
    ).toFixed(2);
    const shippingFees = 0;
    const totalPrice = (+totalProductCost + shippingFees).toFixed(2);

    return (
        <div className={styles.viewCart}>
            <div className={styles.viewCartLeft}>
                {cartItems.map((item) => (
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
                <h2>Order Summary</h2>
                <p>Products Costs: {totalProductCost} Lei</p>
                <p>Shipping Fees: {shippingFees} Lei</p>
                <h1>Total: {totalPrice} Lei</h1>

                <button onClick={() => clearCart()} className={styles.buyNow}>
                    <h3>Send Order</h3>
                </button>
            </div>
        </div>
    );
};

export default ViewCart;