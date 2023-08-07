import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>
      <div className="maintenance-container">
        <h1>Site Under Maintenance - Vinoth K</h1>
        <p>
          We're currently performing some maintenance on our website. We'll be
          back soon!
        </p>
      </div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
