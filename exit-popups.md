# 🎯 Exit Popups

Display targeted popups when visitors are about to leave, with optional coupons and calls-to-action.

---

## 📋 Overview

**Flow:**

1. Admin creates exit popups in **Products → Exit Popups**.
2. Each popup has: title, body, image, CTA, optional coupon, trigger, and targeting.
3. On the frontend, when the trigger fires (e.g., exit intent), the popup is shown.
4. Impressions and clicks are tracked.

---

## ⚙️ Enabling Exit Popups

1. Go to **Setup → Settings → Products**.
2. Under **Exit Popups**, enable the feature.
3. Set **Dismiss days** — How long to hide the popup after the user dismisses it.
4. Save.

---

## ➕ Creating an Exit Popup

1. Go to **Products → Exit Popups**.
2. Click **New Popup** (or **Add**).
3. Configure:

| Field | Description |
|-------|-------------|
| **Name** | Internal name |
| **Title** | Popup headline |
| **Body** | Main text/content |
| **Image** | Optional image |
| **CTA button text** | e.g., "Get 10% Off" |
| **CTA link** | Where the button goes |
| **Coupon** | Optional coupon to offer |
| **Trigger type** | Exit intent, Time delay, Scroll % |
| **Trigger value** | e.g., seconds for delay, % for scroll |
| **Target pages** | Which pages show the popup |
| **Cart required** | Only show if cart has items |
| **Dismiss days** | Override global setting |
| **Sort order** | Priority when multiple popups match |

4. Save.

---

## ⚡ Trigger Types

- **Exit intent** — Fires when the mouse leaves the viewport (intent to close tab).
- **Time delay** — Fires after X seconds on the page.
- **Scroll** — Fires when the user scrolls X% down the page.

---

## 🎯 Targeting

- **Target pages** — Restrict to specific URLs or page types.
- **Cart required** — Only show if the cart has at least one item.

---

## 🧪 Testing Exit Popups

Exit popups run only on the customer shop frontend (`/products/client` and related pages). To test immediately:

1. Open your store URL with `?products_exit_popup_test=1` appended, e.g.:  
   `https://yoursite.com/products/client?products_exit_popup_test=1`
2. In test mode, the first available popup will appear after ~500 ms (or use **Time Delay** with a few seconds for reliable testing).
3. Alternatively, create a popup with trigger **Time Delay** (e.g., 3 sec) or **Scroll Depth** (e.g., 50%) for easier manual testing.

---

## 📊 Tracking

- **Impressions** — When the popup is shown.
- **Clicks** — When the CTA is clicked.

Data is stored for reporting and optimization.
