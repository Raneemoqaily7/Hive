import React from "react";
import styles from "./cardList.module.css";
import Card from "../CardDetails/Card";

const getData = async (cat) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/blogs?cat=${encodeURIComponent(cat || "")}`, {
    cache: "no-store",
  });
console.log(res,"ressss")
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
};


const CardList = async ({ cat }) => {
  const data = await getData(cat);
  console.log(data,"dataaaaaaa")
  return (
    <div className={styles.container}>
     
      <h1 className={styles.title}>Recent Blogs</h1>
      <div className={styles.blogs}>
        {data?.posts?.map((item) => (
          <Card  item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
