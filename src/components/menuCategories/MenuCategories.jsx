import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./menuCategories.module.css"

const MenuCategories =()=>{

    return(

        
<div className={styles.categoryList}>
    
    <Link href ="/blog" className={`${styles.categoryItem} ${styles.style}`}> Style </Link>
    <Link href ="/blog" className={`${styles.categoryItem} ${styles.fashion}`}> Fashion </Link>
    <Link href ="/blog" className={`${styles.categoryItem} ${styles.culture}`}> Culture </Link>
    <Link href ="/blog" className={`${styles.categoryItem} ${styles.food}`}> Food </Link>
    
    
    </div>
    )

}

export default MenuCategories;