import React from 'react';
import {Route, Routes, useParams} from 'react-router-dom';
import ContentManager from './components/content-manager/content-manager';
import {categoryRoutes} from "./utils/mapping";

const CustomRoutes = () => {
    return (
        <Routes>
            {categoryRoutes.map(({path, index}) => (
                <Route
                    key={path}
                    path={`/categories/${path}`}
                    element={<ContentManager ContentType="Category" Index={index}/>}
                />
            ))}

            {categoryRoutes.map(({path}) => (
                <Route
                    key={path}
                    path={`/categories/${path}/:id`}
                    element={<CategoryContentManager/>}
                />
            ))}
            <Route
                key={"product-index"}
                path={`/product/:id`}
                element={<ProductContentManager/>}
            />

            <Route
                key={"product-search"}
                path={`/product/search/:keyword`}
                element={<ProductSearchManager/>}
            />
            <Route
                key={"all-products"}
                path={`/products/all`}
                element={<ContentManager ContentType={"AllProducts"}/>}
            />
            <Route
                key={"view-cart"}
                path={`/cart`}
                element={<ContentManager ContentType={"ViewCart"}/>}
            />

            <Route
                key={"deals"}
                path={`/deals`}
                element={<ContentManager ContentType="ProductDeals"/>}
            />

            <Route
                key={"new-arrivals"}
                path={`/new-arrivals`}
                element={<ContentManager ContentType="ProductDeals"/>}
            />

            <Route
                key={"new-arrivals"}
                path={`/new-arrivals`}
                element={<ContentManager ContentType="ProductDeals"/>}
            />

            <Route
                key={"pc-builder"}
                path={`/pc-builder`}
                element={<ContentManager ContentType="UnderConstruction"/>}
            />

            <Route
                key={"gift-cards"}
                path={`/gift-cards`}
                element={<ContentManager ContentType="UnderConstruction"/>}
            />

            <Route
                key={"home"}
                path={`/`}
                element={<ContentManager ContentType="Category" Index={1}/>}
            />
        </Routes>
    );
};

const CategoryContentManager = () => {
    const {id} = useParams();
    const index = Number(id);
    return <ContentManager ContentType="Products" Index={index}/>;
};

const ProductContentManager = () => {
    const {id} = useParams();
    const index = Number(id);
    return <ContentManager ContentType="ProductPage" Index={index}/>;
};

const ProductSearchManager = () => {
    const {keyword} = useParams();
    return <ContentManager ContentType="ProductSearch" Index={keyword}/>;
};

export default CustomRoutes;
