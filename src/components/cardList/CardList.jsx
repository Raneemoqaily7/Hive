import React from "react";
import Pagination from "../pagination/Pagination"
import styles from "./cardList.module.css";
import Card from "../CardDetails/Card";



const getData =async(cat)=>{
    const res = await fetch(`http://localhost:3000/api/posts?cat=${cat} || ""}`, {
        cache: "no-store",
    })
    if (!res.ok){
        throw new Error ("Faild")
    }
    return res.json()
    
}
const CardList = async ({cat}) => {
    const data = await getData(cat)
    return (
        <div className={styles.container}>

            <h1 className={styles.title}> Recent Blogs</h1>  
                <div className={styles.blogs}>
                    <div className={styles.blog}>
                        {data?.map((item) =>(
                           <Card item ={item} key={item._id}/>
                       
                        ))}
                       

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