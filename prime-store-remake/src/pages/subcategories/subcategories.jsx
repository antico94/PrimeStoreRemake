import React from 'react';
import styles from './subcategories.module.css'
import headset from './../../assets/images/headphones.png'
import subcategoryCard from "../../components/subcategory-card/subcategory-card";
import SubcategoryCard from "../../components/subcategory-card/subcategory-card";


const Subcategories = ({data}) => {
    return (
        <div className={styles.subcatoriesList}>
            {
                data.map(el=>{
                    return <SubcategoryCard subcategoryId={el.subcategoryId}
                                            key={el.subcategoryId}
                                            name={el.name}
                                            imageName={el.imageName}/>
                })
            }
        </div>
    );
};

export default Subcategories;