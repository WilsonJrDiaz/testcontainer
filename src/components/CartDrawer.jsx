import styles from './CartDrawer.module.css'

export default function CartDrawer({ cart, isOpen, onClose, onChangeQty, onCheckout, total, qualifiesFreeShip }) {
  return (
    <>
      <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} onClick={onClose} />
      <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
        <div className={styles.head}>
          <span className={styles.title}>Your Cart</span>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        <div className={styles.items}>
          {cart.length === 0 ? (
            <div className={styles.empty}>
              <span className={styles.emptyIcon}>🛍️</span>
              <p>Your cart is empty.</p>
              <p>Add some designer items to get started.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className={styles.item}>
                <div className={styles.itemEmoji}>{item.emoji}</div>
                <div className={styles.itemInfo}>
                  <div className={styles.itemBrand}>{item.brand}</div>
                  <div className={styles.itemName}>{item.name.split(' ').slice(0, 4).join(' ')}</div>
                  <div className={styles.itemPrice}>${item.price.toFixed(2)}</div>
                  <div className={styles.qty}>
                    <button className={styles.qtyBtn} onClick={() => onChangeQty(item.id, -1)}>−</button>
                    <span className={styles.qtyNum}>{item.qty}</span>
                    <button className={styles.qtyBtn} onClick={() => onChangeQty(item.id, 1)}>+</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className={styles.foot}>
          <div className={styles.subtotalRow}>
            <span className={styles.subLabel}>Subtotal</span>
            <span className={styles.subTotal}>${total.toFixed(2)}</span>
          </div>
          {qualifiesFreeShip && (
            <p className={styles.freeNote}>✓ You qualify for free shipping!</p>
          )}
          <button className={styles.checkoutBtn} onClick={onCheckout} disabled={cart.length === 0}>
            Secure Checkout →
          </button>
        </div>
      </div>
    </>
  )
}
