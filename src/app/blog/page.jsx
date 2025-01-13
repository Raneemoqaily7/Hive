import React from "react";
import styles from "./blogBage.module.css"
import CardList from "../../components/cardList/CardList";
import Menu from "../../components/Menu/Menu";


const BlogPage = ({ searchParams }) => {
    const cat = searchParams.cat; // Extract 'cat' from the query
  
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>{cat ? `${cat} Blogs` : "All Blogs"}</h2>
        <CardList cat={cat} /> {/* Pass 'cat' to CardList */}
      </div>
    );
  };

export default BlogPage;