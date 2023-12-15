import styles from "@/styles/page.module.scss";

export default function Loading() {
  return (
    <div className={styles.loading_overlay} id="loadingOverlay">
      <div className={styles.loading_spinner}></div>
    </div>
  );
}
