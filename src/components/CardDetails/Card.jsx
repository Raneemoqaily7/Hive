"use client";
import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Card = ({ key, item }) => {
  const { data: session } = useSession();

  const isOwner = session?.user?.email === item.userEmail;
  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this blog?");
    if (!confirmed) return;

    try {
      const res = await fetch(`/api/blogs/${item.slug}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Blog deleted successfully!");
        window.location.reload();
      } else {
        alert("Failed to delete the blog.");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        {item.img && (
          <Image src={item.img} alt="blog" fill className={styles.image} />
        )}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {new Date(item.createdAt).toISOString().split("T")[0]} -
          </span>
          <span className={styles.category}>{item.catSlug}</span>
          <div className={styles.writerBlock}>
            <span className={styles.writer}>by: {item.user.name}</span>
            {isOwner && (
              <div className={styles.buttons}>
                <Link href={`/blogs/edit/${item.slug}`} className={styles.editButton}>
                  Edit
                </Link>
                <button onClick={handleDelete} className={styles.deleteButton}>
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
        <Link href={`/blogs/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>{item.desc.substring(0, 60)}</p>
        <Link href={`/blogs/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
