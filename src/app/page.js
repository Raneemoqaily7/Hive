import Image from "next/image";

import Link from "next/link"
import Feature from "@/components/feature/Feature";
import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";

import styles from "./home.module.css"
export default function Home() {
  return (

<div className= {styles.container}>
  <Feature/>
  <CategoryList/>
  

  
  <div className={styles.content}>
    <CardList/>
   

  </div>
</div>
  )
    
  
    
    
        
        
    
  ;
}
