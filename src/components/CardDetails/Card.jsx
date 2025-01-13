import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = ({ key, item }) => {

   
    return (
        <div className={styles.container} key={key}>

            <div className={styles.imageContainer}>
                <Image src="/p1.jpg" alt="blog" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>

                <div className={styles.detail}>
                    <span className={styles.date}>{new Date(item.createdAt).toISOString().split("T")[0]} - </span>

                    <span className={styles.category}> {item.catSlug}</span>
                    <span className={styles.writer}>
                        {item.user?.name ? ` by ${item.user.name}` : " by Unknown"}
                    </span>
                </div>
                <Link href="/">
                    <h1> {item.title}</h1>

                </Link>
                <p className={styles.desc}>
                    {item.desc}
                </p>
                <Link href="/" className={styles.link}> Read More</Link>
            </div>
        </div>

    )

}

export default Card;