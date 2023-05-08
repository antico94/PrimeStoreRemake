import React, { useState, useEffect } from 'react';
import styles from './subcategory-card.module.css';
import { Link, useLocation } from 'react-router-dom';

const SubcategoryCard = ({ subcategoryId, name, imageName }) => {
    const location = useLocation();
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        import(`./../../assets/subcategory_images/${imageName}`)
            .then((image) => setImageSrc(image.default))
            .catch((error) => console.log(error));
    }, [imageName]);

    return (
        <Link className={styles.linkSubcategory} to={`${location.pathname}/${subcategoryId}`}>
            <div className={styles.subcategoryCard}>
                <div className={styles.subcategoryImageContainer}>
                    {imageSrc && <img src={imageSrc} alt="headset" className={styles.subcategoryImage} />}
                </div>
                <h1 className={styles.subcategoryName}>{name}</h1>
            </div>
        </Link>
    );
};

export default SubcategoryCard;
