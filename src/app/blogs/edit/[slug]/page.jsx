"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./edit.module.css";

const EditBlog = ({ params: paramsPromise }) => {
  const [params, setParams] = useState(null);
  const [blog, setBlog] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // Resolve `params` promise
  useEffect(() => {
    paramsPromise.then((resolvedParams) => setParams(resolvedParams));
  }, [paramsPromise]);

  useEffect(() => {
    if (!params) return;

    // Fetch the blog details by slug
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${params.slug}`);
        const data = await res.json();
        setBlog(data);
        setTitle(data.title);
        setDesc(data.desc);
        setImg(data.img || "");
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [params]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(`/api/blogs/${params.slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, desc, img }),
      });

      if (res.ok) {
        router.push(`/blogs/${params.slug}`);
      } else {
        console.error("Error updating blog");
      }
    } catch (error) {
      console.error("Error submitting update:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!params) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Loading blog details...</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Edit Blog</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Description
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className={styles.textarea}
          ></textarea>
        </label>
        <button type="submit" disabled={isSubmitting} className={styles.button}>
          {isSubmitting ? "Updating..." : "Update Blog"}
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
