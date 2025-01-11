import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
return (
<div className={styles.container}>
<h2 className={styles.subtitle}>{"What's new"}</h2>
<h1 className={styles.title}>Most Popular</h1>
<div className={styles.items}>
<Link href="/" className={styles.item}>
{/* <div className={styles.imageContainer}>
<Image src="/p1.jpg" alt="" fill className={styles.image}/>
</div> */}
<div className={styles.textContainer}>
<span className={`${styles.category} ${styles.travel}`}>Travel</span>
<h3 className={styles.blogTitle}> detaaaaails</h3>
<div className={styles.detail}></div>
<span className={styles.username}> username -</span>
<span className={styles.date}> 10.03.2023</span>
<span></span>
</div>

</Link>
<Link href="/" className={styles.item}>
{/* <div className={styles.imageContainer}>
<Image src="/p1.jpg" alt="" fill className={styles.image}/>
</div> */}
<div className={styles.textContainer}>
<span className={`${styles.category} ${styles.culture}`}>Culture</span>
<h3 className={styles.blogTitle}> detaaaaails</h3>
<div className={styles.detail}></div>
<span className={styles.username}> username -</span>
<span className={styles.date}> 10.03.2023</span>
<span></span>
</div>

</Link>
<Link href="/" className={styles.item}>
{/* <div className={styles.imageContainer}>
<Image src="/p1.jpg" alt="" fill className={styles.image}/>
</div> */}
<div className={styles.textContainer}>
<span className={`${styles.category} ${styles.food}`}>Food</span>
<h3 className={styles.blogTitle}> detaaaaails</h3>
<div className={styles.detail}></div>
<span className={styles.username}> username -</span>
<span className={styles.date}> 10.03.2023</span>
<span></span>
</div>

</Link>
<Link href="/" className={styles.item}>
{/* <div className={styles.imageContainer}>
<Image src="/p1.jpg" alt="" fill className={styles.image}/>
</div> */}
<div className={styles.textContainer}>
<span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
<h3 className={styles.blogTitle}> detaaaaails</h3>
<div className={styles.detail}></div>
<span className={styles.username}> username -</span>
<span className={styles.date}> 10.03.2023</span>
<span></span>
</div>

</Link>
</div>







<h2 className={styles.subtitle}>Chosen by the editor</h2>
<h1 className={styles.title}>Editors Pick</h1>
<div className={styles.items}>
<Link href="/" className={styles.item}>
<div className={styles.imageContainer}>
<Image src="/p1.jpg" alt="" fill className={styles.image}/>
</div>
<div className={styles.textContainer}>
<span className={`${styles.category} ${styles.travel}`}>Travel</span>
<h3 className={styles.blogTitle}> detaaaaails</h3>
<div className={styles.detail}></div>
<span className={styles.username}> username -</span>
<span className={styles.date}> 10.03.2023</span>
<span></span>
</div>

</Link>
<Link href="/" className={styles.item}>
<div className={styles.imageContainer}>
<Image src="/p1.jpg" alt="" fill className={styles.image}/>
</div>
<div className={styles.textContainer}>
<span className={`${styles.category} ${styles.culture}`}>Culture</span>
<h3 className={styles.blogTitle}> detaaaaails</h3>
<div className={styles.detail}></div>
<span className={styles.username}> username -</span>
<span className={styles.date}> 10.03.2023</span>
<span></span>
</div>

</Link>
<Link href="/" className={styles.item}>
<div className={styles.imageContainer}>
<Image src="/p1.jpg" alt="" fill className={styles.image}/>
</div>
<div className={styles.textContainer}>
<span className={`${styles.category} ${styles.food}`}>Food</span>
<h3 className={styles.blogTitle}> detaaaaails</h3>
<div className={styles.detail}></div>
<span className={styles.username}> username -</span>
<span className={styles.date}> 10.03.2023</span>

</div>

</Link>
<Link href="/" className={styles.item}>
<div className={styles.imageContainer}>
<Image src="/p1.jpg" alt="" fill className={styles.image}/>
</div>
<div className={styles.textContainer}>
<span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
<h3 className={styles.blogTitle}> detaaaaails</h3>
<div className={styles.detail}></div>
<span className={styles.username}> username -</span>
<span className={styles.date}> 10.03.2023</span>
<span></span>
</div>

</Link>
</div>




</div>
)
}
export default Menu;