"use client";
import styles from "./Navbar.module.css";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LIST = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Profile",
    url: "/profile",
  },
  {
    id: 3,
    title: "Products",
    url: "/products",
  },
  {
    id: 4,
    title: "Cart",
    url: "/cart",
  },
];

function Navbar() {
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        {NAV_LIST.map((item) => (
          <div key={item.id} className={styles.navItem}>
            <Link href={item.url}>
              <h3 className={pathname === item.url ? styles.activeTab : null}>
                {item.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
