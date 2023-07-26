import React, {useContext, useEffect, useState} from 'react';
import css from './product-page.module.css';
import {description} from "../../utils/lorem-ipsum";
import {removeWhiteBackgroundFromUrl} from "../../utils/remove-white-background";
import {CartContext} from "../../context-provider/cart-context-provider";

const ProductPage = ({data}) => {
    const {addToCart} = useContext(CartContext)
    const [image, setImage] = useState(null);
    const basePrice = data.price.toString().split(".")[0]
    const decimalPrice = data.price.toString().split(".")[1]
    const formattedPrice = basePrice.toLocaleString('ro-RO', {
        style: 'currency',
        currency: 'Lei'
    }).replace("LEI", "Lei");

    useEffect(() => {
        removeWhiteBackgroundFromUrl(data.imageUrl).then((newImageUrl) => {
            setImage(newImageUrl);
        });
    }, [data.imageUrl]);

    if (!image) {
        return <div>Loading...</div>;
    }
    return (
        <div className={css.productPage}>
            <div className={css.bg}/>
            <div className={css.leftSide}>
                <div className={css.features}>
                    <h1 className={css.title}>{data.title}</h1>
                    <p className={css.featuresText}>{description}</p>
                </div>
                <div className={css.buttons}>
                    <div className={`${css.button} ${css.buyButton}`}
                         onClick={() => addToCart(data.productId, data.title, data.price, data.imageUrl)}>
                        <svg className={css.svg} xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 576 512">

                            <path
                                d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/>
                        </svg>
                        <h3 className={css.buttonText}> Add to Cart</h3>

                    </div>
                    <p className={css.productPrice}>{formattedPrice}<sup
                        className={css.supPrice}>{decimalPrice}</sup> Lei</p>
                </div>
            </div>
            <div className={css.rightSide}>
                <img className={css.productImage} src={image} alt={data.productId}/>
            </div>
        </div>
    );
};

export default ProductPage;
