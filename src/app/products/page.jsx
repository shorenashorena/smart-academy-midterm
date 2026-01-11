"use client";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Page() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((res) => setProducts(res));
  }, []);

  if (!products) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {products.map((item) => (
        <div className={styles.itemWrapper} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.image}
              width={150}
              height={150}
              style={{ objectFit: "contain" }}
              className={styles.productImage}
              alt={item.title}
            />
          </div>

          <div className={styles.content}>
            <p className={styles.shipping}>Ships to Ukraine</p>
            <h3 className={styles.title}>{item.title}</h3>

            <div className={styles.rating}>
              <span className={styles.stars}>★★★★★</span>
            </div>

            <div className={styles.priceRow}>
              <p className={styles.price}>${item.price}</p>
            </div>

            <Link href={`/products/details/${item.id}`}>
              <button className={styles.detailButton}>See Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Page;
