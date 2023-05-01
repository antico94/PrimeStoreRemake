import React from 'react';
import styles from './subcategory-card.module.css'

const SubcategoryCard = ({id, subcategoryName, subcategoryImage}) => {
    return (
        <div className={styles.subcategoryCard}>
            <div className={styles.subcategoryImageContainer}>
                <img src={subcategoryImage} alt={"headset"} className={styles.subcategoryImage}/>
            </div>
            <h1 className={styles.subcategoryName}>{subcategoryName}</h1>
        </div>
    );
};

export default SubcategoryCard;