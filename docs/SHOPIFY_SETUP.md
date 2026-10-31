# Selling Syncee products through Shopify

Products supplied through Syncee live in your Shopify store. HerbSearch imports
them for review, shows approved ones on the Shop page and herb pages, and sends
shoppers to Shopify's checkout. Shopify takes payment and works out shipping and
tax; the order then appears in Syncee, which forwards it to the supplier.

Set it up on the **test site first**.

## 1. Shopify store

1. Create a Shopify store on a paid plan (Basic or higher). Note its
   `something.myshopify.com` address (Settings → Domains).
2. In Settings → Payments, turn on test mode while you're testing, so test
   orders don't charge real cards.

## 2. Syncee

1. Install the Syncee app from the Shopify App Store and sign up.
2. Find suppliers and import products into Shopify. US-based suppliers ship
   faster to US shoppers.
3. Add a payment method in Syncee, and turn on Auto Order for suppliers that
   offer it. For suppliers without Auto Order you place each order on the
   supplier's site yourself.

Supplier descriptions often make health claims HerbSearch doesn't allow.
HerbSearch flags them in review, but it's quicker to fix them in Shopify.

## 3. Headless channel (gives HerbSearch its key)

1. In the Shopify App Store, add the free **Headless** sales channel and click
   **Create storefront**.
2. Next to **Storefront API permissions**, click Edit and make sure product
   listings, product inventory and checkouts are allowed. Save.
3. Copy the **private access token**. Keep it private, like a password.
4. Publish the products you want on HerbSearch to the Headless channel (on each
   product, under Publishing, or in bulk from the Products list). Only products
   published there are imported.

## 4. Vercel settings

In the Vercel project (Settings → Environment Variables), add these for
**Preview** only, limited to the branch `claude/focused-pascal-qjyqqy`:

| Name | Value |
|---|---|
| `SHOPIFY_STORE_DOMAIN` | your `something.myshopify.com` address |
| `SHOPIFY_STOREFRONT_PRIVATE_TOKEN` | the private token (mark it Sensitive) |

Then redeploy the test site.

## 5. Import and review

1. On the test site, go to Admin → Settings, choose your store under
   "List Shopify products under this store", and save.
2. Click **Sync from Shopify now**.
3. Go to Admin → Products → Waiting. For each product, check the category, the
   linked herbs and the description, then approve it. Products that mention
   banned items (CBD, THC, raw hemp, opium) are imported as not approved and
   can't go live; products linked to a restricted herb can't be approved as
   something to eat or drink.
4. Open an approved product and click **Buy now** to place a test order. Check
   that it shows up in Shopify and in Syncee, then cancel it.

## How it stays in sync

- Price and stock update on every sync. Changing a product's name, description
  or photos in Shopify sends it back to review.
- Products unpublished from the Headless channel are hidden on HerbSearch.
- On the live site, a daily sync runs automatically once `CRON_SECRET` is set
  (Vercel Cron only runs on the live site). You can always sync by hand from
  Settings.
- Shopify products can't be edited from the seller dashboard; edit them in
  Shopify.
