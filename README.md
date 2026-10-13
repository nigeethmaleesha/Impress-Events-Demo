# Impress Events — Wedding & Event Rentals (Client Approval Demo)

A complete **Next.js + TypeScript + custom CSS** UI demo with an Excel-derived rental catalogue and **email-based quotation requests**. This is a client approval prototype for deployment to Vercel before rebuilding the approved design in Shopify.

## Included

- Responsive editorial homepage, image gallery, story, collection highlights, FAQs and contact page
- **257 Excel-derived catalogue records** across table linens, tabletop pieces, furniture and accessories
- Search by product title, SKU, category and material; category navigation, sort and pagination
- Individual product pages with source SKU and size/variant selection
- Persistent local-storage quotation cart with add/remove/quantity controls
- Full event quotation form: name, email, phone, event type/date/location, notes, selected items
- Node.js email API with server-side item, variant, quantity and contact validation
- Business notification email sent to **kamkanamlage394@gmail.com** by default
- Customer acknowledgement email after successful owner notification (best effort)
- Separate general-contact email form
- Correct 503 errors when SMTP credentials are absent; the interface **never pretends a message was sent**
- Policy page placeholders clearly marked *awaiting client approval*

## Requirements

- Node.js **20.9 or later** (Node 22 LTS recommended)
- npm
- Google Gmail account with **2-Step Verification and an App Password** for SMTP, or another compatible SMTP provider

## Start on your computer

```bash
npm install
cp .env.example .env.local
npm run dev
```

On Windows PowerShell: `Copy-Item .env.example .env.local`

Open http://localhost:3000

## Configure real email delivery (required)

`.env.example` contains **QUOTE_TO_EMAIL=kamkanamlage394@gmail.com**. In `.env.local`, fill in:

```dotenv
QUOTE_TO_EMAIL=kamkanamlage394@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=kamkanamlage394@gmail.com
SMTP_PASSWORD=your-16-character-google-app-password
SMTP_FROM=kamkanamlage394@gmail.com
```

Use the **sender mailbox's** app password, NOT the recipient's password. Gmail usually requires two-step verification and an App Password (availability depends on Google account restrictions). App Passwords must be entered **without spaces**. You can instead use a professional SMTP provider by changing host, port, security and credentials. Do **not** add `.env.local` to Git. The project is now prefilled to use kamkanamlage394@gmail.com as both the temporary sending mailbox and the receiving test inbox. Only the Gmail App Password is still missing; the rest of the email API configuration is already prepared.

**Vercel:** Project → Settings → Environment Variables → add all above SMTP variables for Preview and Production as appropriate; redeploy. `QUOTE_TO_EMAIL` remains the test address until the client approves switching it. The application uses SMTP from server-side API routes, not browser-side credentials.

**How to verify:** Add an item → go to Quote Cart → fill required fields → submit. With SMTP configured, the owner receives a detailed email (reference, contact/event data, items, variants and quantities), and the customer receives an acknowledgement if possible. Without credentials, the server returns **503**, keeps the cart contents and shows an explicit setup error. No payment checkout exists.

If Gmail blocks hosting-server SMTP connections, use an SMTP provider intended for transactional sending. Set a verified sender address and update SMTP settings; no frontend change required.

## Development commands

```bash
npm run dev
npm run build
npm run start
npm run typecheck
npm run lint
npm run check:catalogue
```

## Publish to Vercel

1. Create a GitHub repository and upload the contents of this folder (do not upload `node_modules`, `.next` or `.env.local`).
2. Vercel → Add New Project → import repository → detect **Next.js** framework.
3. Configure environment variables as described above and deploy.
4. Test search, variant selection, quote cart persistence, submission, mobile layout and recipient mailbox.
5. Share preview URL with client for design/workflow approval.
6. When the client approves, translate the design to a Shopify theme and select a suitable quote app or agreed custom workflow. The Next.js app is **not** a Shopify Liquid theme.

## Source and images

Original inventory: `docs/original-stock.xlsx`. Products generated from its eight worksheets are in `src/data/products.json`. See `docs/inventory-review.md` for source quirks (duplicate IDs, unverified records, missing codes). Stock counts **are not live date-based availability**, and are not displayed on the site.

Original reference screenshots are **temporary low-resolution design references**. Optimized AI-created WebP visuals in `public/images/ai` are illustrative and should be replaced with client-approved event photography before final launch. **Every product card and product detail explicitly labels category-level visuals rather than falsely claiming that a photograph matches a SKU.** Brand assets, product photography, policy terms and actual rental rates must be supplied/approved by the client.

## Important design and launch notes

- The supplied Figma file has restricted access through the connected design account. This is an independently designed client-approval prototype based on the PDF, spreadsheet, screenshots and rental workflow. Obtain client approval before treating the design as final.
- The PDF explicitly **excludes** payment gateways, paid checkout, accounts, automated inventory reservation, live date availability, dynamic delivery charges and custom admin dashboards.
- The admin workflow is **email**, not a back-office dashboard. The owner replies to the customer via email after reviewing request details.
- Public page SEO indexing is **disabled** in this approval demo (`robots: noindex`) to avoid temporary mock content being indexed. Enable SEO and configure the correct production site domain on production Shopify.
- This prototype does **not** store quotations in a database; email is the delivery mechanism. If a persistent audit trail, anti-spam distributed rate limiting, file attachments, invoice generation or dashboard is required, those are separate scoped features.
- Temporary policy pages are NOT legal documents. The owner must approve the real wording before launch.
- Production readiness requires test of authenticated SMTP from the deployed Vercel environment, image replacement, legal policy approval, client contact details, and security/traffic testing. A Vercel local build alone does not prove email delivery.


## Responsive update (October 13, 2026)

The responsive layout has been revised across catalogue, header, home, product details, lookbook, contact and quotation pages. At phone/tablet widths (up to 1024px), filters open in a scrolling screen-height drawer with a persistent **Show results** button, a close control, Escape handling, focus containment and background scroll locking. The sort control uses an in-page menu instead of the disruptive large native mobile picker. The design also uses min-width-safe grid children, mobile input sizes, flexible action rows and smaller headers at narrow breakpoints.

The high-quality editorial AI photo set was converted from roughly 21 MB of PNGs to roughly 1.9 MB of WebP assets. These are generic concept visuals, not SKU photographs. See `docs/RESPONSIVE-QA.md`.

**After deploying to Vercel:** check your actual iPhone and Android viewports, select category and sort, close filters with backdrop/close/results, refresh the cart, and submit a test quotation. Full Next.js build and live email delivery must be verified in your project/deployment environment.
