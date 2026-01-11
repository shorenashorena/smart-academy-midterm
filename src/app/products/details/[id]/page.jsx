"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

function page() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((resp) => resp.json())
      .then((res) => setProduct(res));
  }, []);

  if (product === null) return <div>loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageSection}>
          <Image
            src={product.image}
            width={400}
            height={400}
            style={{ objectFit: "contain" }}
            alt={product.title}
            className={styles.productImage}
          />
        </div>
        <div className={styles.detailsSection}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.category}>{product.category}</p>
          <div className={styles.price}>${product.price}</div>
          <p className={styles.description}>{product.description}</p>
          <Link href="/products" className={styles.backButton}>
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
