import React, { useEffect, useState } from 'react';
import styles from './content-manager.module.css';
import Subcategories from "../../pages/subcategories/subcategories";
import ProductsPage from "../../pages/products/products-page";
import {getDataFromApi} from "../../utils/fetch-data";
import ProductPage from "../../pages/product/product-page";


const ContentManager = ({ ContentType, Index }) => {

    const [dataLoaded, setDataLoaded] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getDataFromApi(ContentType, Index);
                setData(data);
                setDataLoaded(true);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();

    }, [Index]);


    if (ContentType === "Category" && dataLoaded){

        return <Subcategories data={data}/>
    }

    if (ContentType === "Products" && dataLoaded){

        return <ProductsPage data={data}/>
    }

    if (ContentType === "ProductPage" && dataLoaded){
        return <ProductPage data={data}/>
    }


    return (
        <div className={styles.contentManager}>
            <h1>{ContentType} : {Index}</h1>
            {dataLoaded && <div>{data}</div>}
        </div>
    );
};

export default ContentManager;
