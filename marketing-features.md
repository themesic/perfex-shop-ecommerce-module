# Marketing Features

Perfex Shop includes a comprehensive set of marketing tools. Each feature can be enabled or disabled in **Setup → Settings → Products** under **Marketing Features**.

---

## Product Reviews

Let customers rate and review products.

### Flow

1. Customer purchases a product.
2. On the product detail page, they can submit a review (rating + text).
3. Admin approves or rejects reviews in **Products → Product Reviews**.
4. Approved reviews appear on the product page.

### Configuration

- Enable **Product reviews** in Settings.
- Reviews require the customer to have purchased the product.
- One review per product per customer.

---

## Referral Program

Customers earn commission by referring new buyers.

### Flow

1. Customer gets a unique **referral code** and **shareable link**.
2. They share the link (e.g., `yoursite.com/products/client?ref=ABC123`).
3. When someone visits with `?ref=`, the code is stored in the session.
4. If that visitor places an order, the referrer earns commission.
5. Commission is recorded and visible in **Products → Referral Program**.

### Configuration

- Enable **Referral program** in Settings.
- Set **Commission %** and **Commission fixed amount** in Settings (or on the Referral Program page).
- Commission is calculated when the order is placed.

---

## Back-in-Stock Notifications

Notify subscribers when out-of-stock products return.

### Flow

1. Product is out of stock.
2. Customer enters email in the "Notify me when back in stock" form.
3. When stock is restored, a **cron job** sends emails to subscribers.
4. Subscribers are marked as notified so they are not emailed again.

### Configuration

- Enable **Back in stock** in Settings.
- Add the **back-in-stock cron** to your server. See [Cron Jobs](cron-jobs.md).

---

## Price Drop Alerts

Notify subscribers when product prices drop.

### Flow

1. Customer subscribes on the product page (optionally with a target price).
2. When the price drops below the target (or current price at signup), a **cron job** sends an email.
3. Subscribers are marked as notified.

### Configuration

- Enable **Price drop alerts** in Settings.
- Add the **price drop cron** to your server. See [Cron Jobs](cron-jobs.md).

---

## Newsletter / Marketing Consent

Collect marketing opt-in at checkout.

### Flow

1. At checkout, a checkbox appears: "Send me promotional emails and updates."
2. If checked, the primary contact's `product_marketing_consent` is set to 1.
3. You can use this for email campaigns and segmentation.

### Configuration

- Enable **Newsletter** in Settings.
- Checkbox is shown only to logged-in customers.

---

## Urgency / Low Stock

Show urgency cues to encourage purchase.

### Flow

- When product quantity is at or below the **low quantity** threshold (Settings), a **"Low stock"** badge is shown on product cards.
- Optional: sale price and countdown (if sale_price_end is used).

### Configuration

- Enable **Urgency** in Settings.
- Set **Low quantity** in Settings (Shipping & Tax section).

---

## Gift Cards

Sell and redeem gift cards.

### Flow

**Purchase:**

1. Customer goes to **Buy Gift Card** (from customer menu).
2. Enters amount, recipient email, optional message.
3. Pays via invoice.
4. When paid, a gift card is created and an email is sent to the recipient (or purchaser if no recipient).

**Redemption:**

1. At checkout, customer enters gift card code.
2. Clicks **Apply**.
3. Balance is applied to the order total.
4. Remaining balance stays on the card for future use.

### Configuration

- Enable **Gift cards** in Settings.
- Set **Gift card minimum amount** in Settings.
- Create **Gift Card Templates** in **Products → Gift Cards → Templates** (design, merge fields).
- Manage gift cards in **Products → Gift Cards**.

---

## Post-Purchase Upsell

Show related products after a purchase.

### Flow

1. Customer completes an order.
2. On the thank-you page, a **"See special offers"** button may appear.
3. A modal shows upsell products based on **Upsell Rules**.
4. Customer can click to view or add products to cart.

### Configuration

- Enable **Upsell** in Settings.
- Go to **Products → Upsell Rules**.
- Create rules: **Trigger products** (what they bought) → **Upsell products** (what to show).
- Leave trigger empty to show for any purchase.

---

## Social Proof

Show purchase activity to build trust.

### Flow

- On product detail pages, when enabled:
  - **"X customers bought this product"** — Total sold count from order history.
  - **"X just purchased this"** — Recent purchase message (e.g., "Someone just purchased this" or "John D. just purchased this"), based on recent paid orders within the configured time window.

### Configuration

- Enable **Social proof** in Settings.
- **Recent purchase (hours)** — How long to show "X just purchased" (default 24, max 168).
- **Show "Someone" instead of names** — When Yes, displays "Someone just purchased this". When No, displays the buyer's first name (e.g., "John D. just purchased this").

---

## Product Recommendations

"Customers who bought X also bought Y."

### Flow

- On product detail pages, a **"You might also like"** section shows related products.
- Logic: products bought together in the same orders, or same category.

### Configuration

- Enable **Product recommendations** in Settings.

---

## A/B Testing & Segmentation

These features have database tables and toggles. Full logic (traffic split, segment targeting) may be extended in future versions.

---

## Email Templates

Marketing-related email templates are registered with Perfex's email system. Manage them in **Setup → Email Templates** — look for the **Products** type.

| Template | Merge fields | Used by |
|----------|--------------|---------|
| **Abandoned Cart Reminder** | `{client_name}`, `{cart_total}`, `{cart_link}`, `{companyname}` | Abandoned cart cron |
| **Product Review Request** | `{client_name}`, `{order_id}`, `{product_link}`, `{companyname}` | Review requests |
| **Product Back In Stock** | `{product_name}`, `{product_link}`, `{companyname}`, `{store_link}` | Back-in-stock cron |
| **Product Price Drop Alert** | `{product_name}`, `{product_price}`, `{product_link}`, `{companyname}`, `{store_link}` | Price drop cron |
| **Newsletter Welcome** | `{client_name}`, `{store_link}`, `{companyname}` | Newsletter signup |
| **Gift Card** | `{recipient_name}`, `{gift_card_amount}`, `{currency}`, `{gift_card_code}`, `{gift_card_expiry}`, `{store_link}`, `{companyname}` | Gift card delivery |
| **Referral Invite** | `{referrer_name}`, `{referral_code}`, `{store_link}`, `{companyname}` | Referral program |
| **Order Placed (Before Payment)** | `{client_name}`, `{order_id}`, `{total}`, `{currency}`, `{invoice_link}`, `{companyname}` | Order placed |

**Note:** The **Abandoned Cart Reminder** template is disabled by default. You must activate it in **Setup → Email Templates** for abandoned cart emails to be sent.
