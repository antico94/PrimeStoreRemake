import './App.css';
import React from "react";
import Layout from "./pages/layout/layout";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CustomRoutes from "./custom-routes";
import ContentManager from "./components/content-manager/content-manager";
import CartContextProvider from "./context-provider/cart-context-provider";


function App() {
    return (
        <Router>
            <CartContextProvider>
                <div className="App">
                    <Layout/>
                </div>
            </CartContextProvider>
        </Router>
    );
}

export default App;
