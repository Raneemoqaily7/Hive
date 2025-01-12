import React from "react";
import Pagination from "../pagination/Pagination"
import styles from "./cardList.module.css";
import Card from "../CardDetails/Card";


const CardList = () => {
    
    return (
        <div className={styles.container}>

            <h1 className={styles.title}> Recent Blogs</h1>  
                <div className={styles.blogs}>
                    <div className={styles.blog}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />

                        {/* <div className={styles.imageContainer}>
                            <Image src="p1.png" alt="blog" fill />
                        </div>
                        <div className={styles.textContainer}></div> */}
                    </div>
                </div>
          

           
        </div>

    )

}
export default CardList;