import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact BlogHive</h1>
      <p className={styles.description}>
        We’d love to hear from you! Whether you have questions, feedback, or want to collaborate, feel free to reach out to us.
      </p>
      <div className={styles.infoSection}>
        <h2 className={styles.heading}>Contact Information</h2>
        <ul className={styles.list}>
          <li><strong>Email:</strong> support@bloghive.com</li>
          <li><strong>Phone:</strong> +1-800-BLOGHIVE</li>
          <li><strong>Address:</strong> 123 BlogHive Street, Creative City, BlogLand</li>
        </ul>
      </div>
      <div className={styles.infoSection}>
        <h2 className={styles.heading}>Follow Us</h2>
        <p>Stay connected with us on social media:</p>
        <ul className={styles.list}>
          <li><strong>Facebook:</strong> <a href="/" target="_blank" rel="noopener noreferrer">facebook.com/bloghive</a></li>
          <li><strong>Twitter:</strong> <a href="/" target="_blank" rel="noopener noreferrer">@bloghive</a></li>
          <li><strong>Instagram:</strong> <a href="/" target="_blank" rel="noopener noreferrer">@bloghive</a></li>
        </ul>
      </div>
      <div className={styles.infoSection}>
        <h2 className={styles.heading}>Business Hours</h2>
        <ul className={styles.list}>
          <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
          <li>Saturday: 10:00 AM - 4:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
    </div>
  );
}
