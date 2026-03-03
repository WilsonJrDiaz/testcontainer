import { useState } from 'react'
import styles from './ProductCard.module.css'

function savings(price, was) {
  return Math.round((1 - price / was) * 100)
}

export default function ProductCard({ product, onAddToCart, delay = 0 }) {
  const [wished, setWished] = useState(false)
  const { brand, name, model, emoji, price, was, tag, stars, reviews } = product

  const tagLabel =
    tag === 'sale' ? `−${savings(price, was)}%`
    : tag === 'auth' ? '✓ Auth'
    : 'New'

  return (
    <div className={styles.card} style={{ animationDelay: `${delay}s` }}>
      <div className={styles.img}>
        <span className={styles.emoji}>{emoji}</span>
        <span className={`${styles.tag} ${styles[tag]}`}>{tagLabel}</span>
        <button
          className={`${styles.wish} ${wished ? styles.wished : ''}`}
          onClick={() => setWished((w) => !w)}
          title="Wishlist"
        >
          {wished ? '♥' : '♡'}
        </button>
      </div>

      <div className={styles.info}>
        <div className={styles.brand}>{brand}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.model}>{model}</div>
        <div className={styles.stars}>
          {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
          <span className={styles.reviews}>({reviews.toLocaleString()})</span>
        </div>
        <div className={styles.freeShip}>✓ Free Shipping Included</div>
        <div className={styles.bottom}>
          <div className={styles.prices}>
            <span className={styles.price}>${price.toFixed(2)}</span>
            <span className={styles.was}>${was.toFixed(2)}</span>
          </div>
          <button
            className={styles.addBtn}
            onClick={() => onAddToCart(product)}
            title="Add to cart"
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}
