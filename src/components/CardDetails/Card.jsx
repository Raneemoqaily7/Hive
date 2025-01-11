import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card =()=>{
    return (
        <div className={styles.container}>

<div className={styles.imageContainer}>
            <Image src="/p1.jpg" alt="blog" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>

                <div className={styles.detail}>
                    <span className={styles.date}> 11.02.2023 - </span>
                    <span className={styles.category}> Culture</span>
                </div>
                <Link href="/">
                <h1> Blog1</h1>
                
                </Link>
                <p className={styles.desc}>
                Dive into a world of engaging content where creativity meets insight.Our blog covers a diverse range of topics including technology, lifestyle, personal growth, health, and much more. Whether you're here to learn something new, find inspiration, or simply enjoy a good read, we've got you covered!
                </p>
                <Link href="/" className={styles.link}> Read More</Link>
            </div>
        </div>

    )

}

export default Card;