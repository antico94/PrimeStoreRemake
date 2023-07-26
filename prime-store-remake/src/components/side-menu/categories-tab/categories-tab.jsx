import React from 'react';
import styles from './../side-menu.module.css'
import {Link} from "react-router-dom";


const CategoriesTab = React.memo(() => {
    return (
        <div className={styles.sideWrapper}>
            <div className={styles.sideTitle}>Categories</div>
            <div className={styles.firstSideMenu}>
                <Link to="/categories/photos-and-videos">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16 12.906a4.47 4.47 0 0 0 0 8.938 4.47 4.47 0 0 0 4.469-4.469A4.47 4.47 0 0 0 16 12.906zm0 7.063a2.577 2.577 0 1 1-.002-5.154A2.577 2.577 0 0 1 16 19.969z"/>
                        <path
                            d="M25.625 9.812h-4.812l-2.062-2.75h-5.5l-2.062 2.75H6.375C5.618 9.812 5 10.43 5 11.188v12.375c0 .756.618 1.375 1.375 1.375h19.25c.757 0 1.375-.617 1.375-1.375V11.188c0-.758-.618-1.376-1.375-1.376zM16 23.477a6.103 6.103 0 1 1 .001-12.205A6.103 6.103 0 0 1 16 23.477zm9.625-10.399h-2.75v-1.375h2.75v1.375z"/>
                    </svg>
                    Photo & Video
                </Link>

                <Link to="/categories/tv-and-monitors">
                    <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="icomoon-ignore">
                        </g>
                        <path
                            d="M29.861 22.931v-19.192h-27.723v19.192h13.328v4.265h-3.732v1.066h8.53v-1.066h-3.732v-4.265h13.328zM3.205 4.804h25.59v17.060h-25.59v-17.060z"
                            fill="black">

                        </path>
                    </svg>
                    TV & Monitors
                </Link>

                <Link to="/categories/home-appliances">
                    <svg fill="black" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path
                            d="M7.0078125 3.9980469C5.3633536 3.9980469 4.0078125 5.3524737 4.0078125 6.9980469L4.0078125 40.001953C4.0078125 41.646923 5.3628427 43.001953 7.0078125 43.001953L8 43.001953L8 45 A 1.0001 1.0001 0 0 0 9 46L13 46 A 1.0001 1.0001 0 0 0 14 45L14 43.001953L22 43C22 44.64497 23.35503 46 25 46L43 46C44.64497 46 46 44.64497 46 43L46 23C46 21.35503 44.64497 20 43 20L33 20L33 7C33 5.3549372 31.645063 4 30 4L7.0078125 3.9980469 z M 7.0078125 5.9980469L30 6C30.562937 6 31 6.4370628 31 7L31 15L6.0078125 15L6.0078125 6.9980469C6.0078125 6.43362 6.4442714 5.9980469 7.0078125 5.9980469 z M 9.984375 7.9863281 A 1.0001 1.0001 0 0 0 9 9L9 12 A 1.0001 1.0001 0 1 0 11 12L11 9 A 1.0001 1.0001 0 0 0 9.984375 7.9863281 z M 6.0078125 17L31 17L31 20L25 20C23.35503 20 22 21.35503 22 23L22 41L13.070312 41.001953 A 1.0001 1.0001 0 0 0 13.042969 41.001953 A 1.0001 1.0001 0 0 0 13 41L9 41 A 1.0001 1.0001 0 0 0 8.9707031 41.001953L7.0078125 41.001953C6.4427823 41.001953 6.0078125 40.566983 6.0078125 40.001953L6.0078125 17 z M 9.984375 18.986328 A 1.0001 1.0001 0 0 0 9 20L9 24 A 1.0001 1.0001 0 1 0 11 24L11 20 A 1.0001 1.0001 0 0 0 9.984375 18.986328 z M 25 22L43 22C43.56503 22 44 22.43497 44 23L44 43C44 43.56503 43.56503 44 43 44L25 44C24.43497 44 24 43.56503 24 43L24 23C24 22.43497 24.43497 22 25 22 z M 37 24 A 1 1 0 0 0 37 26 A 1 1 0 0 0 37 24 z M 41 24 A 1 1 0 0 0 41 26 A 1 1 0 0 0 41 24 z M 34 28C32.083334 28 30.518559 28.754756 29.501953 29.898438C28.485347 31.042119 28 32.527778 28 34C28 35.472222 28.485347 36.957881 29.501953 38.101562C30.518559 39.245244 32.083334 40 34 40C35.916666 40 37.481441 39.245244 38.498047 38.101562C39.514653 36.957881 40 35.472222 40 34C40 32.527778 39.514653 31.042119 38.498047 29.898438C37.481441 28.754756 35.916666 28 34 28 z M 34 30C35.416666 30 36.351893 30.495244 37.001953 31.226562C37.652013 31.957881 38 32.972222 38 34C38 35.027778 37.652013 36.042119 37.001953 36.773438C36.351893 37.504756 35.416666 38 34 38C32.583334 38 31.648107 37.504756 30.998047 36.773438C30.347987 36.042119 30 35.027778 30 34C30 32.972222 30.347987 31.957881 30.998047 31.226562C31.648107 30.495244 32.583334 30 34 30 z M 10 43.001953L12 43.001953L12 44L10 44L10 43.001953 z"/>
                    </svg>
                    Home Appliances
                </Link>

                <Link to="/categories/auto-and-moto">
                    <svg fill="black" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M859.136 720.128c28.277 0 51.2-22.923 51.2-51.2V519.772c0-28.277-22.923-51.2-51.2-51.2H163.84c-28.277 0-51.2 22.923-51.2 51.2v149.156c0 28.277 22.923 51.2 51.2 51.2h695.296zm0 40.96H163.84c-50.899 0-92.16-41.261-92.16-92.16V519.772c0-50.899 41.261-92.16 92.16-92.16h695.296c50.899 0 92.16 41.261 92.16 92.16v149.156c0 50.899-41.261 92.16-92.16 92.16zm-598.699 41.654v62.648c0 24.112-19.291 43.581-42.998 43.581h-6.164c-23.707 0-42.998-19.469-42.998-43.581v-62.915c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v62.915c0 46.65 37.544 84.541 83.958 84.541h6.164c46.413 0 83.958-37.892 83.958-84.541v-62.648c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48zm593.92 0v62.648c0 24.112-19.291 43.581-42.998 43.581h-6.164c-23.707 0-42.998-19.469-42.998-43.581v-62.915c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v62.915c0 46.65 37.544 84.541 83.958 84.541h6.164c46.413 0 83.958-37.892 83.958-84.541v-62.648c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"/>
                        <path
                            d="M308.224 594.348c0 31.109-25.211 56.32-56.32 56.32s-56.32-25.211-56.32-56.32 25.211-56.32 56.32-56.32 56.32 25.211 56.32 56.32zm519.168 0c0 31.109-25.211 56.32-56.32 56.32s-56.32-25.211-56.32-56.32 25.211-56.32 56.32-56.32 56.32 25.211 56.32 56.32zm-419.072 20.48h204.8c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48h-204.8c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48zm371.968-420.27c0-45.245-36.675-81.92-81.92-81.92h-373.76c-45.245 0-81.92 36.675-81.92 81.92V428.03h537.6V194.558zM201.728 468.99V194.558c0-67.866 55.014-122.88 122.88-122.88h373.76c67.866 0 122.88 55.014 122.88 122.88V468.99h-619.52z"/>
                    </svg>
                    Auto & Moto
                </Link>

                <Link to="/categories/gaming">
                    <svg viewBox="0 0 15 15" version="1.1" id="gaming" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.1,12.5c-0.6,0.3-1.4,0.1-1.8-0.5l-1.1-1.4H4.8L3.7,12l0,0c-0.5,0.7-1.4,0.8-2.1,0.3c-0.5-0.4-0.7-1-0.6-1.5l0.7-3.7l0,0&#xA;&#x9;C1.9,5.9,3,5,4.2,5v0H7V3.5C7,2.7,7.6,2,8.4,2h3.1C11.8,2,12,2.2,12,2.5S11.8,3,11.5,3h-3C8.2,3,8,3.2,8,3.4c0,0,0,0.1,0,0.1V5h2.8&#xA;&#x9;v0c1.2,0,2.3,0.9,2.5,2.1l0,0l0.7,3.7l0,0C14.1,11.5,13.8,12.2,13.1,12.5z M6,7.5C6,6.7,5.3,6,4.5,6S3,6.7,3,7.5S3.7,9,4.5,9&#xA;&#x9;S6,8.3,6,7.5z M12,7.5C12,7.2,11.8,7,11.5,7H11V6.5C11,6.2,10.8,6,10.5,6S10,6.2,10,6.5V7H9.5C9.2,7,9,7.2,9,7.5S9.2,8,9.5,8H10v0.5&#xA;&#x9;C10,8.8,10.2,9,10.5,9S11,8.8,11,8.5V8h0.5C11.8,8,12,7.8,12,7.5z"/>
                    </svg>
                    Gaming
                </Link>

                <Link to="/categories/toys-and-collectibles">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                        <path
                            d="M2 1.25C2.648 2 2.297 2.52 2 3c-.247.4-1 1.736-1 2a1.06 1.06 0 0 0 1 .781c.38-.219.68-.711 1-1.031C3 4.75 4 6 4 7c0 .608-1 2.875-1 2.875.114.114.742.43 1 .5 0 0 1.021-2.113 2-2.375a4.172 4.172 0 0 1 2 0c.984.264 2 2.375 2 2.375.253-.068.826-.4 1-.5 0 0-.869-1.885-1-2.375 0 0-.42-1.272 0-2 1.29-.745 2.5-.098 2.5 2 .528-.305 1.016-1.5 1-2-.476-1.776-2.5-2.5-4-1-.965-.557-2.635-.616-4-.25 0-2.25-2.04-3-3.5-3zM2.625 3a.375.375 0 1 1 0 .75.375.375 0 0 1 0-.75zm-.875 7L1 11s2 2.25 6 2.25S13 11 13 11l-.75-1S10 12 7 12s-5.25-2-5.25-2z"
                        />
                    </svg>
                    Toys & Collectibles
                </Link>


            </div>
        </div>
    );
});

export default CategoriesTab;
