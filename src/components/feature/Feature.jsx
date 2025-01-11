'use client';
import React, { useState } from "react";
import styles from "./feature.module.css";
import Image from "next/image";

const Feature = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Blog Hive here!</b> Discover my blogs and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Explore Ideas, Stories, and Inspiration</h1>
          <p className={styles.postDesc}>
            Dive into a world of engaging content where creativity meets insight. 
            {showFullText ? (
              <>
                Our blog covers a diverse range of topics including technology, lifestyle, personal growth, health, 
                and much more. Whether you're here to learn something new, find inspiration, or simply enjoy a good read, we've got you covered!
              </>
            ) : (
              <>... </>
            )}
          </p>
          <button className={styles.button} onClick={toggleText}>
            {showFullText ? "Show Less" : "More Details"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
