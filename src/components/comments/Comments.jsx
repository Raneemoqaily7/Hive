import Link from "next/link";
import Image from "next/image";
import styles from "./comments.module.css";


const Comment = () => {
    const status = "authenticated";
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea placeholder="write your comment" className={styles.input} />
                    <button className={styles.button}> Send</button>
                </div>) : (
                <Link href="/login"></Link>
            )
            }
            <div className={styles.comments}>

                <div className={styles.comment}></div>
                <div className={styles.user}>
                    <Image src="/p1.jpg" alt="user image" width={50} height={50} className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Raneem Oqaily</span>
                        <span className={styles.date}> 01.01.2020</span>
                    </div>
                </div>
                <p className={styles.desc}> lerm loerm lerm loerm v vlerm loerm lerm loerm lerm loerm lerm loermlerm loerm lerm loerm lerm loerm lerm loerm lerm loerm lerm loerm</p>
            </div>

            <div className={styles.comments}>

                <div className={styles.comment}></div>
                <div className={styles.user}>
                    <Image src="/p1.jpg" alt="user image" width={50} height={50} className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Raneem Oqaily</span>
                        <span className={styles.date}> 01.01.2020</span>
                    </div>
                </div>
                <p className={styles.desc}> lerm loerm lerm loerm v vlerm loerm lerm loerm lerm loerm lerm loermlerm loerm lerm loerm lerm loerm lerm loerm lerm loerm lerm loerm</p>
            </div>


            <div className={styles.comments}>

                <div className={styles.comment}></div>
                <div className={styles.user}>
                    <Image src="/p1.jpg" alt="user image" width={50} height={50} className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Raneem Oqaily</span>
                        <span className={styles.date}> 01.01.2020</span>
                    </div>
                </div>
                <p className={styles.desc}> lerm loerm lerm loerm v vlerm loerm lerm loerm lerm loerm lerm loermlerm loerm lerm loerm lerm loerm lerm loerm lerm loerm lerm loerm</p>
            </div>


        </div>
    );

};

export default Comment;