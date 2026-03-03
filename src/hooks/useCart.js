import { useState, useCallback } from 'react'

export function useCart() {
  const [cart, setCart] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === product.id)
      if (existing) {
        return prev.map((c) =>
          c.id === product.id ? { ...c, qty: c.qty + 1 } : c
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }, [])

  const changeQty = useCallback((id, delta) => {
    setCart((prev) => {
      const updated = prev.map((c) =>
        c.id === id ? { ...c, qty: c.qty + delta } : c
      )
      return updated.filter((c) => c.qty > 0)
    })
  }, [])

  const clearCart = useCallback(() => setCart([]), [])

  const total = cart.reduce((s, c) => s + c.price * c.qty, 0)
  const count = cart.reduce((s, c) => s + c.qty, 0)
  const qualifiesFreeShip = total >= 75

  return {
    cart,
    isOpen,
    setIsOpen,
    addToCart,
    changeQty,
    clearCart,
    total,
    count,
    qualifiesFreeShip,
  }
}
