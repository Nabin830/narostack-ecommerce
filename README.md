# Narostack Digital LLC — Digital Product Store

## Run
```bash
npm install
npm run dev
```

## Payment — Dodo Payments
All checkout links use Dodo Payments. The single source of truth is `lib/dodoLinks.ts`.

### To add a new product
1. Create it in your Dodo Payments dashboard
2. Copy the product ID (e.g. `pdt_0NgXXXXXX`)
3. Add an entry to `lib/dodoLinks.ts`
4. Add the product to `data/products.ts` using the same slug
5. Add the product to `productOptions` in `app/checkout/page.tsx`

## Environment variables
Create `.env.local`:
```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=any_long_random_string
NEXTAUTH_URL=http://localhost:3000
```

## Security
⚠️ Rotate your Dodo Payments API key — it was exposed in chat. Never put it in frontend files.
Run `npm install next@latest` to fix the Next.js security vulnerability.
