"use client";

import { useState, useEffect } from "react";
import useSWR from "swr";
import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import handleTime from "@/utils/time";
import Link from "next/link";
import Loading from "@/components/loading/Loading";
import { useSession } from "next-auth/react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SinglePage = ({ params: paramsPromise }) => {
  const [params, setParams] = useState(null);
  const { status } = useSession();
  const slug = params?.slug;

 
  useEffect(() => {
    paramsPromise.then((resolvedParams) => setParams(resolvedParams));
  }, [paramsPromise]);

  
  const { data, error, isLoading } = useSWR(
    slug ? `/api/blogs/${slug}` : null,
    fetcher
   
  );
  console.log(data,"yyyyy")
  
 
 


  if (!params) return <Loading />;
  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          {status === "authenticated" ? (
            <>
              <h1 className={styles.title}>{data?.title}</h1>
              <div className={styles.user}>
                {data?.user?.image && (
                  <div className={styles.userImageContainer}>
                    <Image
                      src={data.user.image}
                      alt=""
                      fill
                      className={styles.avatar}
                    />
                  </div>
                )}
                 <span className={styles.username}>{data?.user?.name}</span>
                <div className={styles.userTextContainer}>
                 
                  <span className={styles.date}>
                    {handleTime(data.createdAt)}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div>
              <Link href="/login">Login to see the blogs</Link>
            </div>
          )}
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image
              src={data.img}
              alt=""
              fill
              className={styles.image}
            />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default SinglePage;
