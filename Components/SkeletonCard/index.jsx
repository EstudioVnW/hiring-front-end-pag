import styles from "./styles.module.scss";

export default function SkeletonCard() {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.image}></div>
      <div className={styles.info}>
        <div className={styles.title}></div>
        <div className={styles.year}></div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.button}></div>
        <div className={styles.button}></div>
      </div>
    </div>
  );
}