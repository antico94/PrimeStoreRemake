import React, {useEffect, useState, useRef} from 'react';
import styles from './dark-mode.module.css';
import animationData from './../../assets/lottie/darkMode.json';
import Lottie from "lottie-react";

const DarkMode = () => {
    //region Body Control
    const [darkMode, setDarkMode] = useState(false);
    const [direction, setDirection] = useState(1);

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
        setDirection(direction === 1 ? -1 : 1)
        lottieRef.current.play();
        setTimeout(() => {
            lottieRef.current.pause();
        }, 700); // Pause after 1 second
        lottieRef.current.setDirection(direction)

    };
    //#endregion

    //region LottieControl
    const lottieRef = useRef();
    useEffect(() => {
        if (lottieRef !== undefined) {
            lottieRef.current.setSpeed(4);
        }
    }, [lottieRef]);


    //endregion

    return (
        <div className={styles.darkModeContainer} onClick={darkModeToggle}>
            <Lottie
                animationData={animationData}
                autoplay={false}
                loop={false}
                lottieRef={lottieRef}
            />
        </div>
    );
};


export default DarkMode;
