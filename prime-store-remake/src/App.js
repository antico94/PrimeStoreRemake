import './App.css';
import { useEffect, useState } from "react";

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
            <button onClick={darkModeToggle}>Toggle</button>
            <h1>Hello mom!</h1>
        </div>
    );
}

export default App;
