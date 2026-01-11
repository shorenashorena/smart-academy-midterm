import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome To Definitely Real Marketplace</h1>
      <p className={styles.subtitle}>
        Discover the latest trends in fashion, electronics, and jewelry.
        High-quality products delivered right to your doorstep.
      </p>
      <Link href="/products" className={styles.shopButton}>
        Start Shopping
      </Link>
    </div>
  );
}
