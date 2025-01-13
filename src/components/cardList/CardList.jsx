import React from "react";
import styles from "./cardList.module.css";
import Card from "../CardDetails/Card";

const getData = async (cat) => {
  const res = await fetch(`http://localhost:3000/api/posts?cat=${encodeURIComponent(cat || "")}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
};

const CardList = async ({ cat }) => {
  const data = await getData(cat);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Blogs</h1>
      <div className={styles.blogs}>
        {data?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
