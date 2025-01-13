"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./signupPage.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import Loading from "@/components/loading/Loading";



const SignupPage = () => {
  const { status } = useSession();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/auth/signup", {
        
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
       
        }),
      });
      console.log(response)
      if (response.ok) {
        const result = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });

        if (result.error) {
          setError("Error signing in after signup");
        } else {
          router.push("/login");
        }
      } else {
        const data = await response.json();
        setError(data.message || "Signup failed");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  if (status === "loading") {
    return (
      <div className={styles.loading}>
        <Loading />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Sign Up</h1>
        <form
          onSubmit={handleSubmit}
          className={styles.form}>
        
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />
          {error && <p className={styles.error}>{error}</p>}
          <button
            type="submit"
            className={styles.submitButton}>
            Sign Up
          </button>
        </form>
        <div className={styles.divider}>
          <span>OR</span>
        </div>
        <div
          className={styles.socialButton}
          onClick={() => signIn("google")}>
          Sign up with Google
        </div>
      </div>
    </div>
  );
};
SignupPage.displayName = "SignupPage";

export default SignupPage;