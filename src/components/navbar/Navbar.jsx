import React from 'react';
import styles from "./navbar.module.css";
import Auth from '../Auth/Auth';
import Image from 'next/image';
import Link from 'next/link';
import Toggle from '../toggle/Toggle';
const Navbar=()=> {
    return(
        <div className={styles.container}>
        <div className={styles.social}>

            <Image src="/facebook.png" alt= "facebook" width={24} height={24}/>
            <Image src="/linkedin.png" alt= "facebook" width={26} height={25}/>
        </div>
        <div className={styles.logo}> BlogHive</div>
        <div className={styles.links}> 
            <Toggle/>
            <Link href="/" className={styles.link}>HomePage </Link>
            <Link href="/"  className={styles.link}>Contact</Link>
            <Link href="/"  className={styles.link}>About</Link>
            <Auth/>
        </div>

        </div>

    )
   
}

export default Navbar