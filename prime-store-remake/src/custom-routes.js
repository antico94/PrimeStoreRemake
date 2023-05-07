import React from 'react';
import {Route, Routes} from 'react-router-dom';
import ContentManager from './components/content-manager/content-manager';

const CustomRoutes = () => {
    return (
        <Routes>
            <Route path="/categories/mobile-devices" element={<ContentManager ContentType="Category" Index={1}/>} />
            <Route path="/categories/pc-and-software" element={<ContentManager ContentType="Category" Index={2}/>} />
            <Route path="/categories/photos-and-videos" element={<ContentManager ContentType="Category" Index={3}/>} />
            <Route path="/categories/tv-and-monitors" element={<ContentManager ContentType="Category" Index={4}/>} />
            <Route path="/categories/home-appliances" element={<ContentManager ContentType="Category" Index={5}/>} />
            <Route path="/categories/auto-and-moto" element={<ContentManager ContentType="Category" Index={6}/>} />
            <Route path="/categories/gaming" element={<ContentManager ContentType="Category" Index={7}/>} />
            <Route path="/categories/toys-and-collectibles" element={<ContentManager ContentType="Category" Index={8}/>} />
        </Routes>
    );
};

export default CustomRoutes;
