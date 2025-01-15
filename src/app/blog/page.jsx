import React from "react";
import styles from "./blogBage.module.css"
import CardList from "../../components/cardList/CardList";
import Menu from "../../components/menu/Menu";


const BlogPage =  ({ searchParams }) => {
    const  cat =  searchParams.cat; 
  
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>{cat ? `${cat} Blogs` : "All Blogs"}</h2>
        <CardList cat={cat} /> 
      </div>
    );
  };

export default BlogPage;