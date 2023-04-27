import './App.css';
import React, {useEffect, useState} from "react";
import Header from "./components/header/header";
import SideMenu from "./components/side-menu/side-menu";
import DarkMode from "./components/dark-mode/dark-mode";
import ContentManager from "./components/content-manager/content-manager";
import Layout from "./pages/layout/layout";

function App() {
    return (
        <div className="App">
            <Layout/>
        </div>
    );
}

export default App;
