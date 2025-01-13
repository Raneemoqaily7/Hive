"use client";
import { useState } from "react";
import useSWR from "swr";
import styles from "./comments.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import handleTime from "@/utils/time";
import Loading from "../loading/Loading";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const { data, mutate, isLoading } = useSWR(
    `/api/comments?postSlug=${postSlug}`,
    fetcher
  );
  const [desc, setDesc] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = async () => {
    if (!desc.trim()) return;
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
      headers: { "Content-Type": "application/json" },
    });

    setDesc("");
    setFeedbackMessage("Comment submitted successfully!");
    mutate();
    setTimeout(() => setFeedbackMessage(""), 3000);
  };

  return (
    <div className={styles.container}>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <div className={styles.inputContainer}>
            <textarea
              placeholder="Write a comment..."
              className={styles.input}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <button
            className={styles.button}
            onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : null}
      {feedbackMessage && (
        <div className={styles.feedback}>{feedbackMessage}</div>
      )}
      <div className={styles.comments}>
        {isLoading ? (
          <Loading />
        ) : status === "authenticated" ? (
          data?.map((item) => (
            <div
              key={item.id}
              className={styles.comment}>
              <div className={styles.user}>
                {item?.user?.image && (
                  <Image
                    src={item.user.image}
                    alt="User profile"
                    width={50}
                    height={50}
                    className={styles.image}
                  />
                )}
                <div className={styles.userInfo}>
                  <span className={styles.username}>{item.user.name}</span>
                  <span className={styles.date}>
                    {handleTime(item.createdAt)}
                  </span>
                </div>
              </div>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
};

export default Comments;
