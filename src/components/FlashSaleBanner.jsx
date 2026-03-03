import { useCountdown } from '../hooks/useCountdown'
import { flashDeals } from '../data/products'
import styles from './FlashSaleBanner.module.css'

export default function FlashSaleBanner({ onAddToCart }) {
  const { hours, minutes, seconds } = useCountdown(8 * 3600 + 47 * 60)

  return (
    <div className={styles.banner}>
      <div className={styles.left}>
        <div className={styles.eyebrow}>Flash Sale — Limited Time</div>
        <h2 className={styles.title}>
          Today's <em>Best</em><br />Deals
        </h2>
        <p className={styles.sub}>Prices drop every hour. Free shipping on all orders.</p>
        <div className={styles.countdown}>
          {[['Hours', hours], ['Min', minutes], ['Sec', seconds]].map(([label, val]) => (
            <div key={label} className={styles.cdBox}>
              <span className={styles.cdNum}>{val}</span>
              <span className={styles.cdLabel}>{label}</span>
            </div>
          ))}
        </div>
        <button className={styles.btn}>Shop Flash Deals</button>
      </div>

      <div className={styles.right}>
        {flashDeals.map((deal) => (
          <button
            key={deal.id}
            className={styles.deal}
            onClick={() => onAddToCart(deal)}
          >
            <span className={styles.dealEmoji}>{deal.emoji}</span>
            <div className={styles.dealInfo}>
              <div className={styles.dealBrand}>{deal.brand}</div>
              <div className={styles.dealName}>{deal.name}</div>
              <div className={styles.dealPrices}>
                <span className={styles.dealNow}>${deal.price.toFixed(2)}</span>
                <span className={styles.dealWas}>${deal.was.toFixed(2)}</span>
                <span className={styles.dealPct}>−{deal.pct}%</span>
              </div>
              <div className={styles.dealShip}>✓ Free Shipping</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
