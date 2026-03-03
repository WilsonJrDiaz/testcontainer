import styles from './Hero.module.css'

export default function Hero({ onAddToCart }) {
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.eyebrow}>Authorized Retailer · Since 2005</div>
        <h1 className={styles.h1}>
          Designer<br />
          Brands at<br />
          <em>Honest</em><br />
          Prices.
        </h1>
        <p className={styles.desc}>
          Ray-Ban, Gucci, Prada, Fossil and hundreds more. Fully authenticated,
          shipped same-day from New York.
        </p>
        <div className={styles.actions}>
          <button className={styles.btnGold} onClick={() => scrollTo('sunglasses')}>
            Shop Sunglasses
          </button>
          <button className={styles.btnOutline} onClick={() => scrollTo('watches')}>
            Explore Watches
          </button>
        </div>
        <div className={styles.chips}>
          <div className={styles.chip}>🛡 Authenticity Guaranteed</div>
          <div className={`${styles.chip} ${styles.chipDelay}`}>✈ Ships same day before 2 PM EST</div>
        </div>
      </div>

      <div className={styles.right}>
        <a
          className={styles.subCard}
          href="#sunglasses"
          onClick={(e) => { e.preventDefault(); scrollTo('sunglasses') }}
        >
          <span className={styles.dealFlag}>Up to 55% Off</span>
          <div className={styles.subEyebrow}>Featured · Ray-Ban</div>
          <div className={styles.subTitle}>
            Folding Aviator<br />RB3479
          </div>
          <div className={styles.subPrice}>
            From <strong>$149.95</strong>{' '}
            <span className={styles.subWas}>$329.00</span>
          </div>
          <span className={styles.subEmoji}>🕶️</span>
        </a>

        <a
          className={styles.subCard}
          href="#watches"
          onClick={(e) => { e.preventDefault(); scrollTo('watches') }}
        >
          <span className={styles.dealFlag}>New Arrivals</span>
          <div className={styles.subEyebrow}>Featured · Fossil & Calvin Klein</div>
          <div className={styles.subTitle}>
            Designer<br />Watches
          </div>
          <div className={styles.subPrice}>
            From <strong>$89.95</strong> · Free Shipping
          </div>
          <span className={`${styles.subEmoji} ${styles.subEmojiDelay}`}>⌚</span>
        </a>
      </div>
    </section>
  )
}
