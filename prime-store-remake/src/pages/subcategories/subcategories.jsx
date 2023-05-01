import React from 'react';
import styles from './subcategories.module.css'
import headset from './../../assets/images/headphones.png'
import subcategoryCard from "../../components/subcategory-card/subcategory-card";
import SubcategoryCard from "../../components/subcategory-card/subcategory-card";


const Subcategories = () => {
    const subcategories = [
        {
            id: 0,
            subcategoryName: "Mobile Devices",
            subcategoryImage: headset
        },
        {
            id: 0,
            subcategoryName: "Mobile Devices",
            subcategoryImage: headset
        },
        {
            id: 0,
            subcategoryName: "Mobile Devices",
            subcategoryImage: headset
        }, {
            id: 0,
            subcategoryName: "Mobile Devices",
            subcategoryImage: headset
        },
        {
            id: 0,
            subcategoryName: "Mobile Devices",
            subcategoryImage: headset
        },
        {
            id: 0,
            subcategoryName: "Mobile Devices",
            subcategoryImage: headset
        }, {
            id: 0,
            subcategoryName: "Mobile Devices",
            subcategoryImage: headset
        },
        {
            id: 0,
            subcategoryName: "Mobile Devices",
            subcategoryImage: headset
        },
        {
            id: 0,
            subcategoryName: "Mobile Devices",
            subcategoryImage: headset
        },

    ]
    return (
        <div className={styles.subcatoriesList}>
            {
                subcategories.map(el => {
                    return SubcategoryCard(el)
                })
            }
        </div>
    );
};

export default Subcategories;