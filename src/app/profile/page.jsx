import styles from "./page.module.css";

const page = async () => {
  const resp = await fetch("https://fakestoreapi.com/users/3");
  const user = await resp.json();

  return (
    <div className={styles.card}>
      <h1 className={styles.name}>
        {user.name.firstname} {user.name.lastname}
      </h1>
      <p>@{user.username}</p>

      <div className={styles.info}>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>City:</strong> {user.address.city}
        </p>
        <p>
          <strong>House:</strong> {user.address.number}
        </p>
      </div>
    </div>
  );
};

export default page;
