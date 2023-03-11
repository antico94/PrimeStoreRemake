import './App.css';
import React, {useEffect, useState} from "react";
import Header from "./components/header/header";
import SideMenu from "./components/side-menu/side-menu";
import DarkMode from "./components/dark-mode/dark-mode";

function App() {
    return (
        <div className="App">
            <Header/>
            <SideMenu/>
            <div className="darkModeToggle">
                <DarkMode/>
            </div>
        </div>
    );
}

export default App;
