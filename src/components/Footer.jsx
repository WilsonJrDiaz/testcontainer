import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.logo}>
            <span className={styles.joy}>Joy</span>
            <span className={styles.lot}>Lot</span>
          </div>
          <p className={styles.about}>
            New York's trusted authorized distributor of designer sunglasses, watches, eyeglasses, handbags, and more since 2005. Every product guaranteed authentic.
          </p>
          <div className={styles.cert}>🛡 Authorized Distributor — All Brands</div>
        </div>

        <div>
          <div className={styles.heading}>Shop</div>
          <ul className={styles.links}>
            {['Sunglasses', 'Watches', 'Eyeglasses', 'Handbags', 'Apparel', 'Contact Lenses', 'Kids'].map((l) => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className={styles.heading}>Brands</div>
          <ul className={styles.links}>
            {['Ray-Ban', 'Gucci', 'Prada', 'Fossil', 'Maui Jim', 'Calvin Klein', 'Tag Heuer'].map((l) => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className={styles.heading}>Help</div>
          <ul className={styles.links}>
            {['Track Order', 'Returns', 'Authenticity', 'Contact Us', '1-800-393-5050', 'Store Locations'].map((l) => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copy}>© 2026 JoyLot.com — All Rights Reserved · New York, USA</span>
        <div className={styles.socials}>
          {['𝕏', 'fb', 'ig', 'yt'].map((s) => (
            <button key={s} className={styles.social}>{s}</button>
          ))}
        </div>
      </div>
    </footer>
  )
}
