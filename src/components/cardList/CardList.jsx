import React from "react";
import Pagination from "../pagination/Pagination"
import styles from "./cardList.module.css";
import Card from "../CardDetails/Card";




const getData = async (page) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed");
    }
  
    return res.json();
  };

const CardList = async ({page}) => {

     const data= await getData(page)
     const Post_PER_PAGE = 2;
     

    
    return (
        <div className={styles.container}>

            <h1 className={styles.title}> Recent Blogs</h1>  
                <div className={styles.blogs}>
                    <div className={styles.blog}>
                        {data?.map((item)=>(
                        <Card item={item} key={item._id}/>
                        ))}
                       

                        {/* <div className={styles.imageContainer}>
                            <Image src="p1.png" alt="blog" fill />
                        </div>
                        <div className={styles.textContainer}></div> */}
                    </div>
                </div>
          

            <Pagination  page={page} hasPrev={hasPrev} hasNext={hasNext}/>
        </div>

    )

}
export default CardList;