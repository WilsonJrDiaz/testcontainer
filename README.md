# JoyLot 2026 — Vite + React

Redesign prototype of JoyLot.com with real products and brands.

## Tech Stack

- **Vite 5** + **React 18**
- CSS Modules (scoped styles per component)
- No external UI libraries — pure custom design
- Google Fonts: Playfair Display + Manrope

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── AuthBar.jsx / .module.css     — Top authority bar
│   ├── Ticker.jsx / .module.css      — Animated promo ticker
│   ├── Navbar.jsx / .module.css      — Sticky nav with search
│   ├── Hero.jsx / .module.css        — Split hero section
│   ├── BrandsStrip.jsx / .module.css — Brand logos row
│   ├── ProductCard.jsx / .module.css — Individual product card
│   ├── ProductSection.jsx / .module.css — Grid with filters
│   ├── FlashSaleBanner.jsx / .module.css — Live countdown deals
│   ├── CartDrawer.jsx / .module.css  — Slide-in cart sidebar
│   ├── TrustStrip.jsx / .module.css  — Trust signals bar
│   ├── Footer.jsx / .module.css      — Full footer
│   └── Toast.jsx / .module.css       — Notification toast
├── data/
│   └── products.js                   — Real JoyLot product data
├── hooks/
│   ├── useCart.js                    — Cart state logic
│   ├── useCountdown.js               — Live countdown timer
│   └── useToast.js                   — Toast notification logic
├── App.jsx                           — Root component
├── index.css                         — Global styles + CSS variables
└── main.jsx                          — Entry point
```

## Features

- 🔍 Live search across all products
- 🏷 Brand/category filters per section
- 🛒 Persistent cart with quantity controls
- ⏱ Live countdown timer (Flash Sale)
- 🔔 Toast notifications on add to cart
- 📱 Responsive layout
- ✨ CSS Modules — zero style conflicts
- 🎨 Luxury editorial aesthetic (Playfair Display)
