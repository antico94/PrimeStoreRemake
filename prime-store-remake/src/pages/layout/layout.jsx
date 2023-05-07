import React from 'react';
import Header from "../../components/header/header";
import SideMenu from "../../components/side-menu/side-menu";
import ContentManager from "../../components/content-manager/content-manager";
import DarkMode from "../../components/dark-mode/dark-mode";
import styles from './layout.module.css'
import CustomRoutes from "../../custom-routes";

const Layout = () => {
    return (
        <>
            <Header/>
            <div className={styles.baseContent}>
                <SideMenu/>
                <CustomRoutes/>
            </div>
            <div className="darkModeToggle">
                <DarkMode/>
            </div>
        </>
    );
};

export default Layout;