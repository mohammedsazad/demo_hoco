# PinduDemo — Vercel Prototype

A frontend prototype for the client's Pinduoduo-style e-commerce concept.

## Included
- Responsive storefront
- Search
- Product cards and product detail pages
- Product image + video display
- Wishlist demo using browser localStorage
- Recently viewed tracking demo
- Personalized recommendation/discount concept section
- Demo admin dashboard
- Image/video file picker previews (UI only)

## Run locally
1. Install Node.js 18+.
2. In this folder run `npm install`.
3. Run `npm run dev`.
4. Open http://localhost:3000
5. Admin demo: http://localhost:3000/admin

## Deploy to Vercel
Push this folder to GitHub, then import the repository in Vercel. Framework should be detected as Next.js automatically.

## Important
This is a prototype, not a production store. Uploaded files in the admin screen are only selected in the browser; they are not persisted. Production will need Shopify/backend storage, real authentication, payments, database, order management, and secure media storage.
