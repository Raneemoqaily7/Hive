import React from "react";
import styles from "./menu.module.css";

import MenuBlogs from "../menuBlogs/MenuBlogs";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
return (
<div className={styles.container}>
<h2 className={styles.subtitle}>{"What's new"}</h2>
<h1 className={styles.title}>Most Popular</h1>
<MenuBlogs withImage={false} />






<h2 className={styles.subtitle}>Discover By Topic</h2>
<h1 className={styles.title}>Categories</h1>
<MenuCategories />


<h2 className={styles.subtitle}>Chosen by the editor</h2>
<h1 className={styles.title}>Editors Pick</h1>

<MenuBlogs withImage={true}/>
</div>
)
}
export default Menu;