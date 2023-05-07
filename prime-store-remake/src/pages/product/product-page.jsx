﻿import React, {useEffect, useState} from 'react';
import css from './product-page.module.css';
import {description} from "../../utils/lorem-ipsum";
import {removeWhiteBackgroundFromUrl} from "../../utils/remove-white-background";

const ProductPage = ({data}) => {
    const [image, setImage] = useState(null);

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
                    <h2 className={css.featuresSubtitle}>Features:</h2>
                    <p className={css.featuresText}>{description}</p>
                </div>
                <div className={css.buttons}>


                    <div className={`${css.button} ${css.buyButton}`}>
                        <svg className={css.svg} xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 576 512">

                            <path
                                d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/>
                        </svg>
                        <h3 className={css.buttonText}> Add to Cart</h3>

                    </div>
                    <div className={`${css.button} ${css.wishlistButton}`}>
                        <svg className={css.svg}
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 576 512">

                            <path
                                d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
                        </svg>

                        <h3 className={css.buttonText}> Add to Wishlist</h3>

                    </div>
                    <div className={`${css.button} ${css.loveButton}`}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className={css.svg}
                             viewBox="0 0 512 512">
                            <path
                                d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/>
                        </svg>
                        <h3 className={css.buttonText}> Add to Favorites</h3>
                    </div>
                </div>
            </div>
            <div className={css.rightSide}>
                <img className={css.productImage} src={image} alt={data.productId}/>
                <h1 className={css.price}>Price: {data.price} Lei</h1>
            </div>
        </div>
        );
};

export default ProductPage;
