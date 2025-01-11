"use client";
import Link from 'next/link';
import styles from './auth.module.css';
import { useState } from "react";

const Auth = () => {
    const [open, setOpen] = useState(false)
    const status = "NotAuthenticated";


    return (
        <>
            {status === "NotAuthenticated" ?
                (<Link href="/login"  className={styles.link}> Login</Link>)
                :
                (
                    <>
                        <Link href="/write" className={styles.link}> Write</Link>
                        <span className={styles.link}>Logout</span>
                    </>
                )
            }

            <div className={styles.burger} onClick={()=> setOpen(!open)}>
                <div className={styles.line}> </div>
                <div className={styles.line}> </div>
                <div className={styles.line}> </div>
            </div>

            {open && (
                <div className={styles.responsiveMnue}> 
               <Link href= '/'>HomePage</Link>
               <Link href= '/'>About</Link>
               <Link href= '/'>Contact</Link>
               {status === "NotAuthenticated" ?
                (<Link href="/login"> Login</Link>)
                :
                (
                    <>
                        <Link href="/write">Write</Link>
                        <span className={styles.link}>Logout</span>
                    </>
                )
            }
                </div>
            )}
        </>
    );

}

export default Auth;