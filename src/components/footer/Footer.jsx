import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/logo.png" alt="logo" width={50} height={50} />
                </div>
            </div>
            <p className={styles.desc}> Stay inspired and connected with the latest stories and ideas.</p>
            <div className={styles.links}>
            <p>© 2025 Blog Hive. All Rights Reserved.</p>
            </div>
        </div>
    )

}
export default Footer;