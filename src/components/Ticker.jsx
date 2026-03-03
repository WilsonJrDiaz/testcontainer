import styles from './Ticker.module.css'

const items = [
  '🚚 Free Shipping on orders over $75',
  '⭐ 4.8/5 from 3,118 verified reviews',
  '🏷 Up to 70% off designer brands',
  '🔒 Secure & confidential checkout',
  '👓 Ray-Ban · Gucci · Prada · Fossil · Maui Jim',
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  )
}
