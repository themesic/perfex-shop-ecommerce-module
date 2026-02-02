# 📣 Remarketing

Track visitors and customers with Facebook Pixel, Google Ads, and custom scripts for retargeting campaigns.

---

## 📋 Overview

Remarketing tags fire on key ecommerce events:

- **PageView** — Store visits
- **ViewContent** — Product detail views
- **AddToCart** — Items added to cart
- **InitiateCheckout** — Checkout page loaded
- **Purchase** — Order completed and paid (thank-you page)

Currency is taken from your store's base currency (Setup → Settings → Currencies). Events include value, currency, and item details for GA4 and Facebook compatibility.

---

## 📘 Facebook (Meta) Pixel

### Configuration

1. Go to **Setup → Settings → Products**.
2. Under **Remarketing**, enable **Facebook Pixel**.
3. Enter your **Pixel ID** (e.g., from Facebook Events Manager).
4. Save.

### Events Fired ⚡

- **PageView** — On product/store pages.
- **ViewContent** — On product detail page.
- **AddToCart** — When a product is added to cart (AJAX).
- **InitiateCheckout** — On checkout page.
- **Purchase** — On thank-you page after order (with value and currency).

---

## 🔍 Google Ads Remarketing

### Configuration

1. Go to **Setup → Settings → Products**.
2. Under **Remarketing**, enable **Google Ads**.
3. Enter your **Conversion ID** (e.g., AW-123456789).
4. Optionally enter the **Conversion Label**.
5. Save.

### Events ⚡

- Same ecommerce events as Facebook.
- Purchase uses the configured `send_to` (ID + label) for conversion tracking.

---

## 📜 Custom Script

For other platforms (e.g., TikTok, Pinterest, custom analytics):

1. Enable **Custom remarketing script**.
2. Paste your full tracking code (including `<script>` tags) in the text area.
3. The script is injected on product and checkout pages.

---

## 🎉 Thank-You Page

After a successful order, customers are briefly redirected to a **thank-you page** that fires the Purchase event with order total, then redirects to the invoice. This ensures the pixel fires even when payment happens on an external page.
