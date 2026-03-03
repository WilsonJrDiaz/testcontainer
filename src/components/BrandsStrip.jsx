import styles from './BrandsStrip.module.css'
import { brands } from '../data/products'

export default function BrandsStrip({ onBrandClick }) {
  return (
    <div className={styles.strip}>
      <div className={styles.label}>Official Authorized Distributor</div>
      <div className={styles.row}>
        {brands.map((brand) => (
          <button
            key={brand}
            className={styles.brand}
            onClick={() => onBrandClick(brand)}
          >
            {brand}
          </button>
        ))}
      </div>
    </div>
  )
}
