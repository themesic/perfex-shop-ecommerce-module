# 🎟️ Coupons

Coupons allow you to offer discounts (percentage or fixed amount) to customers at checkout.

---

## 📋 Overview

**Flow:**

1. Admin creates a coupon in **Products → Coupons**.
2. Customer enters the coupon code at checkout.
3. Discount is applied to the order total.

---

## ➕ Creating a Coupon

1. Go to **Products → Coupons**.
2. Click **New Coupon** (or **Add**).
3. Configure:

| Field | Description |
|-------|-------------|
| **Code** | Unique code customers enter (e.g., SAVE10) |
| **Type** | Percentage (%) or Fixed amount |
| **Amount** | Discount value |
| **Product IDs** | Limit to specific products (optional) |
| **Category IDs** | Limit to specific categories (optional) |
| **Min order amount** | Minimum cart total to apply |
| **Usage limit** | Max times the coupon can be used (optional) |
| **Expiry** | Valid until date (optional) |

4. Save.

---

## 📜 Coupon Rules

- **Product restriction** — Coupon applies only when restricted products are in the cart.
- **Category restriction** — Coupon applies only when products from restricted categories are in the cart.
- **Min order** — Cart subtotal must meet the minimum.
- **Usage limit** — Stops applying once the limit is reached.

---

## 🛒 Customer Flow

1. Customer adds products to cart and goes to checkout.
2. Enters coupon code in the coupon field.
3. Clicks **Apply**.
4. Discount is subtracted from the total.
5. Customer completes the order.

---

## ⚙️ Enabling Coupons

Coupons can be enabled or disabled globally in **Setup → Settings → Products** under the General section (**Coupons disabled** toggle).

---

## 🎁 Coupon vs. Gift Card

- **Coupon** 🎟️ — One-time or limited-use discount code.
- **Gift card** 🎁 — Stored balance that can be applied until it runs out. See [Marketing Features](marketing-features.md#gift-cards).
