import React from 'react';
import styles from './subcategories.module.css'
import SubcategoryCard from "../../components/subcategory-card/subcategory-card";


const Subcategories = ({data}) => {
    return (
        <div className={styles.subcatoriesList}>
            {
                data.map(el => {
                    return <SubcategoryCard subcategoryId={el.subcategoryId}
                                            name={el.name}
                                            key={el.subcategoryId + Math.random()}
                                            imageName={el.imageName}/>
                })
            }
        </div>
    );
};

export default Subcategories;