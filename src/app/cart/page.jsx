"use client";
import styles from "./page.module.css";

import { useEffect, useState } from "react";

function page() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts/2")
      .then((resp) => resp.json())
      .then((res) => setCart(res));
  }, []);

  const changeQuantity = (productId, change) => {
    const index = cart.products.findIndex(
      (item) => item.productId === productId
    );

    const currentQuantity = cart.products[index].quantity;
    const nextQuantity = Math.min(10, Math.max(0, currentQuantity + change));
    cart.products[index].quantity = nextQuantity;

    setCart({ ...cart });
  };

  if (!cart) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.pageTitle}>Shopping Cart</h2>
      <div className={styles.headRow}>
        <div className={styles.colProduct}>PRODUCT</div>
        <div className={styles.colQuantity}>QUANTITY</div>
        <div className={styles.colPrice}>PRICE</div>
      </div>

      {cart.products.map((item) => (
        <div className={styles.itemWrapper} key={item.productId}>
          <div className={styles.colProduct}>
            <div className={styles.imagePlaceholder}></div>
            <h3 className={styles.title}>Product ID: {item.productId}</h3>
          </div>
          <div className={styles.colQuantity}>
            <div className={styles.quantityContainer}>
              <button
                className={styles.quantityButton}
                onClick={() => changeQuantity(item.productId, 1)}
              >
                +
              </button>
              <p className={styles.quantity}>Quantity: {item.quantity}</p>
              <button
                className={styles.quantityButton}
                onClick={() => changeQuantity(item.productId, -1)}
              >
                -
              </button>
            </div>
          </div>
          <div className={styles.colPrice}>
            <p className={styles.price}>
              Price: ${item.productId * 50 * item.quantity}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page;
