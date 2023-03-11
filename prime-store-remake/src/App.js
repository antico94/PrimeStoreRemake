import './App.css';
import {useEffect, useState} from "react";
import Header from "./components/header/header";
import SideMenu from "./components/side-menu/side-menu";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const body = document.body;
        if (darkMode) {
            body.classList.remove('lightMode');
        } else {
            body.classList.add('lightMode');
        }
    }, [darkMode]);

    const darkModeToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="App">
            <Header/>
            <SideMenu/>
            {/*<button onClick={darkModeToggle}>Toggle</button>*/}
            {/*<h1>Hello mom!</h1>*/}
        </div>
    );
}

export default App;
