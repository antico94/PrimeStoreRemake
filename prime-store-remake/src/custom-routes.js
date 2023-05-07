import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import ContentManager from './components/content-manager/content-manager';
import { categoryRoutes } from "./utils/mapping";

const CustomRoutes = () => {
    return (
        <Routes>
            {categoryRoutes.map(({ path, index }) => (
                <Route
                    key={path}
                    path={`/categories/${path}`}
                    element={<ContentManager ContentType="Category" Index={index} />}
                />
            ))}

            {categoryRoutes.map(({ path }) => (
                <Route
                    key={path}
                    path={`/categories/${path}/:id`}
                    element={<CategoryContentManager />}
                />
            ))}
            <Route
                path={`/product/:id`}
                element={<ProductContentManager/>}
            />
        </Routes>
    );
};

const CategoryContentManager = () => {
    const { id } = useParams();
    const index = Number(id);
    return <ContentManager ContentType="Products" Index={index} />;
};

const ProductContentManager = () => {
    const { id } = useParams();
    const index = Number(id);
    return <ContentManager ContentType="ProductPage" Index={index} />;
};

export default CustomRoutes;
