import './App.css';
import React from "react";
import Layout from "./pages/layout/layout";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CustomRoutes from "./custom-routes";
import ContentManager from "./components/content-manager/content-manager";


function App() {
    return (
        <Router>
            <div className="App">
                <Layout/>
            </div>
        </Router>
    );
}

export default App;
