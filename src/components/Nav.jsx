import styles from "./nav.module.css";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.title}>🍽️🧾RecipeMania🧾🍽️</div>
      <div className={styles.tagline}>Your daily dose of deliciousness</div> {/* 👈 Tagline here */}
    </div>
  );
}
