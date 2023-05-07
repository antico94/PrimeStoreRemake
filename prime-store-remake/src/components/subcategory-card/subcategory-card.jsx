import React from 'react';
import styles from './subcategory-card.module.css'
import photo from '../../assets/subcategory_images/Lenses.png'
import {Link, useLocation} from "react-router-dom";

const SubcategoryCard = ({subcategoryId, name, imageName}) => {
    const location = useLocation();
    return (
        <Link className={styles.linkSubcategory} to={`${location.pathname}/${subcategoryId}`}>
            <div className={styles.subcategoryCard}>
                <div className={styles.subcategoryImageContainer}>
                    <img src={require("./../../assets/subcategory_images/" + imageName)} alt={"headset"}
                         className={styles.subcategoryImage}/>
                </div>
                <h1 className={styles.subcategoryName}>{name}</h1>
            </div>
        </Link>)

};

export default SubcategoryCard;