//dynamic route segment
import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/Menu/Menu";
import Comment from "@/components/comments/Comments";
const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>  Blogg123</h1>
                    <div className={styles.user}>

                        <div className={styles.userImage}>
                            <Image src="/p1.jpg" alt="userImage" fill className={styles.avatar} />

                        </div>
                        <div className={styles.usertext}>
                            <span className={styles.username}>Raneem Oqaily</span>
                            <span className={styles.date}>01.01.2020</span>
                        </div>

                    </div>
                </div>



            </div>


            <div className={styles.content}>
                <div className={styles.blog}>
                    <div className={styles.description}>
                        <p> detsijdlvdkmv knfblngvjkdnv jnvkdjsnv  vjknvkldnvkl vnlksvnlkinflsb nvdlnvlkdnv </p>
                        <p> detsijdlvdkmv knfblngvjkdnv jnvkdjsnv  vjknvkldnvkl vnlksvnlkinflsb nvdlnvlkdnv </p>
                        <p> detsijdlvdkmv knfblngvjkdnv jnvkdjsnv  vjknvkldnvkl vnlksvnlkinflsb nvdlnvlkdnv </p>
                        <p> detsijdlvdkmv knfblngvjkdnv jnvkdjsnv  vjknvkldnvkl vnlksvnlkinflsb nvdlnvlkdnv </p>
                        <p> detsijdlvdkmv knfblngvjkdnv jnvkdjsnv  vjknvkldnvkl vnlksvnlkinflsb nvdlnvlkdnv </p>
                    </div>
                    <div className={styles.comment}>
                        <Comment/>
                    </div>
                </div>
                <Menu />

            </div>
        </div>
    )
}

export default SinglePage;