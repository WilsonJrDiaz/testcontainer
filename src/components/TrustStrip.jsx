import styles from './TrustStrip.module.css'

const items = [
  { icon: '🛡️', title: '100% Authentic', desc: 'Every item sourced from authorized brand distributors.' },
  { icon: '🚀', title: 'Same-Day Shipping', desc: 'Orders before 2 PM EST ship same business day.' },
  { icon: '↩️', title: '180-Day Returns', desc: 'Hassle-free returns within 180 days of purchase.' },
  { icon: '🔒', title: 'Secure Checkout', desc: 'Your payment info is never stored or shared.' },
  { icon: '⭐', title: '4.8 / 5 Stars', desc: 'Over 3,118 verified customer reviews.' },
]

export default function TrustStrip() {
  return (
    <div className={styles.strip}>
      {items.map(({ icon, title, desc }) => (
        <div key={title} className={styles.item}>
          <div className={styles.icon}>{icon}</div>
          <div>
            <div className={styles.title}>{title}</div>
            <div className={styles.desc}>{desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
