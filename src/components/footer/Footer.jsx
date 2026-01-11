import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.links}>
        <button>Conditions of Use</button>
        <button>Privacy Notice</button>
        <button>Interest-Based Ads</button>
      </ul>
      <span>1996-2021, Amazon.com, Inc. or its affiliates</span>
    </div>
  );
}

export default Footer;
