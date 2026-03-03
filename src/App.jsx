import { useState, useMemo } from 'react'
import { useCart } from './hooks/useCart'
import { useToast } from './hooks/useToast'
import { sunglasses, watches, brands, allProducts } from './data/products'

import AuthBar from './components/AuthBar'
import Ticker from './components/Ticker'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrandsStrip from './components/BrandsStrip'
import ProductSection from './components/ProductSection'
import FlashSaleBanner from './components/FlashSaleBanner'
import CartDrawer from './components/CartDrawer'
import TrustStrip from './components/TrustStrip'
import Footer from './components/Footer'
import Toast from './components/Toast'

const sgBrands = ['Ray-Ban', 'Gucci', 'Prada', 'Maui Jim', 'Tommy Hilfiger']
const wtBrands = ['Fossil', 'Calvin Klein', 'Casio', 'Versace', 'Bulova', 'Seiko']

export default function App() {
  const { cart, isOpen, setIsOpen, addToCart, changeQty, clearCart, total, count, qualifiesFreeShip } = useCart()
  const { toast, showToast } = useToast()
  const [searchQuery, setSearchQuery] = useState('')

  function handleAddToCart(product) {
    addToCart(product)
    showToast(`✓ ${product.brand} ${product.name.split(' ').slice(0, 3).join(' ')} added`)
  }

  function handleCheckout() {
    clearCart()
    setIsOpen(false)
    showToast('🎉 Order placed — thank you!')
  }

  function handleBrandClick(brand) {
    const inSG = sunglasses.some((p) => p.brand === brand)
    const target = inSG ? 'sunglasses' : 'watches'
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Filter products by search query
  const filteredSunglasses = useMemo(() => {
    if (!searchQuery) return sunglasses
    const q = searchQuery.toLowerCase()
    return sunglasses.filter((p) =>
      [p.brand, p.name, p.model, p.cat].join(' ').toLowerCase().includes(q)
    )
  }, [searchQuery])

  const filteredWatches = useMemo(() => {
    if (!searchQuery) return watches
    const q = searchQuery.toLowerCase()
    return watches.filter((p) =>
      [p.brand, p.name, p.model, p.cat].join(' ').toLowerCase().includes(q)
    )
  }, [searchQuery])

  return (
    <>
      <AuthBar />
      <Ticker />
      <Navbar
        cartCount={count}
        onCartOpen={() => setIsOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main>
        <Hero onAddToCart={handleAddToCart} />
        <BrandsStrip onBrandClick={handleBrandClick} />

        {searchQuery && (
          <div style={{
            padding: '1rem clamp(1rem,4vw,3rem)',
            fontSize: '0.85rem',
            color: 'var(--muted)',
            fontWeight: 500
          }}>
            Showing results for "<strong style={{ color: 'var(--black)' }}>{searchQuery}</strong>"
            &nbsp;·&nbsp;
            <button
              style={{ color: 'var(--gold)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}
              onClick={() => setSearchQuery('')}
            >
              Clear
            </button>
          </div>
        )}

        <ProductSection
          id="sunglasses"
          title="Designer <em>Sunglasses</em>"
          products={filteredSunglasses}
          brandFilters={sgBrands}
          onAddToCart={handleAddToCart}
        />

        <FlashSaleBanner onAddToCart={handleAddToCart} />

        <ProductSection
          id="watches"
          title="Designer <em>Watches</em>"
          products={filteredWatches}
          brandFilters={wtBrands}
          onAddToCart={handleAddToCart}
        />

        <TrustStrip />
      </main>

      <Footer />

      <CartDrawer
        cart={cart}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onChangeQty={changeQty}
        onCheckout={handleCheckout}
        total={total}
        qualifiesFreeShip={qualifiesFreeShip}
      />

      <Toast message={toast.message} visible={toast.visible} />
    </>
  )
}
