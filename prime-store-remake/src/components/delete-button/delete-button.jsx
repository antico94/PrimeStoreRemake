import React, {useContext} from "react";
import styles from "./delete-button.module.css";
import {CartContext} from "../../context-provider/cart-context-provider";
import bin from './../../assets/svg/delete.svg'

const DeleteButton = ({productId}) => {
    const {removeFromCart} = useContext(CartContext)
    return (
        <button onClick={()=>{removeFromCart(productId)}} className={styles.deleteBtn}>
            <img src={bin}/>
            <p>Remove</p>
        </button>
    );
}

export default DeleteButton;
