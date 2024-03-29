import React, {useEffect, useState} from 'react';
import styles from './content-manager.module.css';
import Subcategories from "../../pages/subcategories/subcategories";
import ProductsPage from "../../pages/products/products-page";
import {GetDataFromApi} from "../../utils/fetch-data";
import ProductPage from "../../pages/product/product-page";
import CartPage from "../../pages/cart-page/cart-page";
import DealsPage from "../../pages/deals-page/deals-page";
import UnderConstruction from "../../pages/under-construction/under-construction";


const ContentManager = ({ContentType, Index}) => {

    const [dataLoaded, setDataLoaded] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (ContentType !== 'ViewCart' && ContentType !== 'UnderConstruction') {
            async function fetchData() {
                try {
                    const data = await GetDataFromApi(ContentType, Index);
                    setData(data);
                    setDataLoaded(true);
                } catch (error) {
                    console.error(error);
                }
            }

            fetchData();
        }


    }, [Index, ContentType]);


    if (ContentType === "Category" && dataLoaded) {
        return <Subcategories data={data}/>
    }

    if (ContentType === "Products" && dataLoaded) {
        return <ProductsPage key={ContentType} data={data}/>
    }

    if (ContentType === "ProductSearch" && dataLoaded) {
        return <ProductsPage key={ContentType} data={data}/>
    }

    if (ContentType === "AllProducts" && dataLoaded) {
        return <ProductsPage key={ContentType} data={data}/>
    }

    if (ContentType === "ProductPage" && dataLoaded) {
        return <ProductPage data={data}/>
    }

    if (ContentType === "ViewCart") {
        return <CartPage/>
    }

    if (ContentType === "ProductDeals" && dataLoaded) {
        return <DealsPage data={data}/>
    }

    if (ContentType === "ProductDeals" && dataLoaded) {
        return <DealsPage data={data}/>
    }

    if (ContentType === "UnderConstruction") {
        return <UnderConstruction/>
    }

    if (ContentType === "Home" && dataLoaded) {
        return <Subcategories data={data}/>
    }


    return (
        <div className={styles.contentManager}>
            <h1>{ContentType} : {Index}</h1>
            {dataLoaded && <div>{data}</div>}
        </div>
    );
};

export default ContentManager;
