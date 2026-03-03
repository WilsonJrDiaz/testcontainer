import styles from './AuthBar.module.css'

export default function AuthBar() {
  return (
    <div className={styles.bar}>
      <span><span className={styles.gold}>★</span> 100% Authentic — Authorized Distributor</span>
      <span className={styles.sep}>·</span>
      <span>📞 1-800-393-5050</span>
      <span className={styles.sep}>·</span>
      <span>180-Day Returns</span>
      <span className={styles.sep}>·</span>
      <span>Founded in New York</span>
    </div>
  )
}
