"use client";
import dynamic from 'next/dynamic';
import styles from "./writePage.module.css";
import Image from "next/image";
import { useState } from "react";
import 'react-quill/dist/quill.snow.css';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const WritePage = () => {
    const [value, setValue] = useState("");
    const [open, setOpen] = useState(false);
    const { status } = useSession;
  const router = useRouter;

    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>;
      }
    
      if (status === "unauthenticated") {
        router.push("/");
      }
    return (
        <div className={styles.container}>
            <input type="text" placeholder="Title" className={styles.input} />
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src="/plus.png" alt="" width={16} height={16} />
                </button>
                {open && (
                    <div className={styles.add}>
                        <button className={styles.addButton}>
                            <Image src="/imagePhoto.png" alt="" width={16} height={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/external.png" alt="" width={16} height={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/video.png" alt="" width={16} height={16} />
                        </button>
                    </div>
                )}

<textarea
    className={styles.textArea}
    value={value}
    onChange={(e) => {
        setValue(e.target.value); // Update state
        console.log("Current Value:", e.target.value); // Log the value
    }}
    placeholder="Tell your thoughts..."
/>

            </div>
            <button className={styles.publish}>Publish</button>
        </div>
    );
};

export default WritePage;
