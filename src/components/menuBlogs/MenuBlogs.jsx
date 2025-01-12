import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./menuBlogs.module.css"

const MenuBlog = ({withImage}) => {
    return (
    <>
   

    
    
    <div className={styles.items}>
    <Link href="/" className={styles.item}>
    {withImage &&(
    <div className={styles.imageContainer}>
    <Image src="/p1.jpg" alt="" fill className={styles.image}/>
    </div>)}
    <div className={styles.textContainer}>
    <span className={`${styles.category} ${styles.style}`}>Style</span>
    <h3 className={styles.blogTitle}> fiiirst</h3>
    <div className={styles.detail}></div>
    <span className={styles.username}> username -</span>
    <span className={styles.date}> 10.03.2023</span>
    <span></span>
    </div>
    
    </Link>
    <Link href="/" className={styles.item}>
    {withImage &&
    <div className={styles.imageContainer}>
    <Image src="/p1.jpg" alt="" fill className={styles.image}/>
    </div>}
    
    <div className={styles.textContainer}>
    <span className={`${styles.category} ${styles.culture}`}>Culture</span>
    <h3 className={styles.blogTitle}> detaaaaails</h3>
    <div className={styles.detail}></div>
    <span className={styles.username}> username -</span>
    <span className={styles.date}> 10.03.2023</span>
    <span></span>
    </div>
    
    </Link>
    <Link href="/" className={styles.item}>
    {withImage &&(
    <div className={styles.imageContainer}>
    <Image src="/p1.jpg" alt="" fill className={styles.image}/>
    </div>)}
    <div className={styles.textContainer}>
    <span className={`${styles.category} ${styles.food}`}>Food</span>
    <h3 className={styles.blogTitle}> detaaaaails</h3>
    <div className={styles.detail}></div>
    <span className={styles.username}> username -</span>
    <span className={styles.date}> 10.03.2023</span>
    
    </div>
    
    </Link>
    <Link href="/" className={styles.item}>
    
    {withImage &&(
        <div className={styles.imageContainer}>
        <Image src="/p1.jpg" alt="" fill className={styles.image}/>
        </div>
    )
    }
    <div className={styles.textContainer}>
    <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
    <h3 className={styles.blogTitle}> detaaaaails</h3>
    <div className={styles.detail}></div>
    <span className={styles.username}> username -</span>
    <span className={styles.date}> 10.03.2023</span>
    <span></span>
    </div>
    
    </Link>
    </div>
    </>
    )
}


export default MenuBlog;