# Pars3c

A modern React + TypeScript ecommerce storefront built with Vite. Pars3c showcases a premium specialty shop experience with category navigation, product browsing, product detail modal, cart management, and responsive UI styling powered by Sass.

## Features

- Home landing page with hero messaging and shop CTA
- Category directory for `Chocolates`, `Coffee`, `Honey`, `Cookies`, and `Bread`
- Product browsing with modal details and add-to-cart support
- Sort products by name and price
- Persistent cart state managed with Redux Toolkit
- Cart page with quantity controls, remove item, clear cart, and total pricing
- Client-side routing via React Router
- Iconography using `lucide-react`

## Tech Stack

- `React 19`
- `TypeScript`
- `Vite`
- `React Router DOM`
- `Redux Toolkit`
- `React Redux`
- `Sass`
- `lucide-react`

## Project Structure

- `src/App.tsx` — application routes and lazy loading
- `src/main.tsx` — app entry point with router and Redux provider
- `src/routes/` — page-level components for home, shop, cart, category, and navigation
- `src/components/` — UI components for directory, product cards, product modal, and cart icon
- `src/store/` — Redux store, typed hooks, cart slice, and selectors
- `src/shop-data.ts` — product catalog and category definitions

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

## How it works

1. The app uses `React Router` for navigation between Home, Shop, and Cart pages.
2. The shop landing page displays category cards that link to category routes like `/shop/chocolates`.
3. Each category page renders product cards from `src/shop-data.ts`.
4. Clicking a product opens a modal with details and cart controls.
5. Cart state is managed globally with `Redux Toolkit` and exposed through `useAppSelector`.
6. The navigation bar includes a cart icon with a live item count and a route to `/cart`.

## What I decided and why

- Chose `Vite` with `React` and `TypeScript` for a fast developer experience, modern build output, and strong type safety.
- Used `Redux Toolkit` for cart state because the cart is shared across the navigation, product modal, and cart page.
- Used `React Router` nested routes so category navigation can remain within the shop section while still sharing a top-level layout.
- Kept product data in `src/shop-data.ts` to make the prototype frontend-only and easy to iterate without a backend.
- Used Sass to keep component styles organized and maintainable while still allowing scoped styling.
- Added a modal-based product detail view to keep browsing smooth and avoid forcing a full page transition.
- Left checkout and authentication out of the MVP to focus on core browsing, cart, and category user flows.

## Potential Next Steps

- Add Stripe checkout integration for a complete ecommerce purchase flow.
- Add user authentication so customers can create accounts and securely sign in.
- Add a user-specific order history page to display past purchases.
- Add a contact page with business information and a contact form.
- Expand the product catalog with more items and more detailed, authentic product descriptions.

## Notes

- The product catalog is currently seeded from `src/shop-data.ts`.
- The app uses client-side state only; there is no backend or checkout integration.
- Styling is handled with Sass and scoped component styles.
- This repository is public.

## License

This project is licensed under the Apache License 2.0. See the `LICENSE` file for details.
