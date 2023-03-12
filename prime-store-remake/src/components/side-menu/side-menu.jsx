import React from 'react';
import styles from "./side-menu.module.css"
import MostWanted from "./most-wanted/most-wanted";
import CategoriesTab from "./categories-tab/categories-tab";
import BuildTab from "./build-tab/build-tab";
import LegalTab from "./legal-tab/legal-tab";


const SideMenu = () => {
    return (
        <div className={styles.sideMenu}>
            <MostWanted/>
            <CategoriesTab/>
            <BuildTab/>
            <LegalTab/>
        </div>
    );
};

export default SideMenu;
