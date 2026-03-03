import { useState } from 'react'
import ProductCard from './ProductCard'
import styles from './ProductSection.module.css'

export default function ProductSection({ id, title, products, brandFilters, onAddToCart }) {
  const [activeFilter, setActiveFilter] = useState('')

  const filtered = activeFilter
    ? products.filter((p) => p.brand === activeFilter)
    : products

  return (
    <section className={styles.section} id={id}>
      <div className={styles.head}>
        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
        <a href="#" className={styles.viewAll}>
          View All →
        </a>
      </div>

      <div className={styles.filters}>
        <button
          className={`${styles.ftab} ${activeFilter === '' ? styles.active : ''}`}
          onClick={() => setActiveFilter('')}
        >
          All
        </button>
        {brandFilters.map((brand) => (
          <button
            key={brand}
            className={`${styles.ftab} ${activeFilter === brand ? styles.active : ''}`}
            onClick={() => setActiveFilter(brand)}
          >
            {brand}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className={styles.empty}>No products found for this filter.</div>
      ) : (
        <div className={styles.grid}>
          {filtered.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              delay={i * 0.05}
            />
          ))}
        </div>
      )}
    </section>
  )
}
