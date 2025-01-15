import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About BlogHive</h1>
      <p className={styles.description}>
        Welcome to <strong>BlogHive</strong>, your ultimate platform for sharing and discovering ideas, stories, and knowledge
      </p>
      <p className={styles.description}>
        At BlogHive, we aim to empower individuals to express themselves through blogs, connect with like-minded readers, and foster a community of creativity and inspiration.
      </p>
      <div className={styles.section}>
        <h2 className={styles.heading}>Our Mission</h2>
        <p className={styles.text}>
          Our mission is to provide a seamless and feature-rich blogging experience that caters to both seasoned writers and aspiring storytellers. Whether you're here to write, read, or connect, BlogHive is the perfect place to make it happen.
        </p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.heading}>Why Choose BlogHive?</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>Easy-to-use platform for creating and managing blogs.</li>
          <li className={styles.listItem}>Modern, responsive design for all devices.</li>
          <li className={styles.listItem}>Secure and reliable infrastructure to protect your data.</li>
          <li className={styles.listItem}>A supportive community of passionate writers and readers.</li>
        </ul>
      </div>
      <p className={styles.text}>Join BlogHive today and be a part of a thriving blogging community!</p>
    </div>
  );
}
