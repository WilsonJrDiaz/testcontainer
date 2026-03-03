import { useState } from 'react'
import styles from './Navbar.module.css'

const categories = [
  { label: 'All', id: '' },
  { label: 'Sunglasses', id: 'sunglasses' },
  { label: 'Watches', id: 'watches' },
  { label: 'Eyeglasses', id: '' },
  { label: 'Handbags', id: '' },
  { label: 'Apparel', id: '' },
  { label: 'Kids', id: '' },
  { label: 'Contact Lenses', id: '' },
]

export default function Navbar({ cartCount, onCartOpen, searchQuery, onSearchChange }) {
  const [activecat, setActivecat] = useState('')

  function scrollTo(id) {
    if (!id) return
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.top}>
        <a href="#" className={styles.logo}>
          <span className={styles.joy}>Joy</span>
          <span className={styles.lot}>Lot</span>
          <span className={styles.dot} />
        </a>

        <div className={styles.search}>
          <svg className={styles.searchIcon} width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search Ray-Ban, Gucci, Fossil…"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <div className={styles.right}>
          <a className={styles.link} href="#sunglasses" onClick={() => scrollTo('sunglasses')}>Sunglasses</a>
          <a className={styles.link} href="#watches" onClick={() => scrollTo('watches')}>Watches</a>
          <a className={styles.link} href="#">Eyeglasses</a>
          <a className={styles.link} href="#">Handbags</a>

          <div className={styles.divider} />

          <button className={styles.iconBtn} title="Wishlist">♡</button>
          <button className={styles.iconBtn} onClick={onCartOpen} title="Cart">
            🛍
            <span className={styles.badge}>{cartCount}</span>
          </button>
          <button className={styles.iconBtn} title="Account">
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.cats}>
        {categories.map((cat) => (
          <a
            key={cat.label}
            className={`${styles.catLink} ${activecat === cat.label ? styles.active : ''}`}
            href={cat.id ? `#${cat.id}` : '#'}
            onClick={(e) => {
              setActivecat(cat.label)
              if (cat.id) {
                e.preventDefault()
                scrollTo(cat.id)
              }
            }}
          >
            {cat.label}
          </a>
        ))}
        <a className={`${styles.catLink} ${styles.sale}`} href="#">
          Sale — Up to 70% Off
        </a>
      </div>
    </nav>
  )
}
