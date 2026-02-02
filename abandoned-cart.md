# 🛒 Abandoned Cart

Recover lost sales by emailing customers who left items in their cart.

---

## 📋 Overview

**Flow:**

1. Customer adds products to cart and leaves without purchasing.
2. **Abandoned cart tracking** records the cart (when enabled).
3. After a configurable **delay**, a **cron job** sends a reminder email.
4. Customer can return and complete the purchase.

---

## ✅ Prerequisites

- **Abandoned cart tracking** — Must be enabled.
- **Abandoned cart email** — Must be enabled.
- **Abandoned Cart Reminder** email template — Must be **active** in **Setup → Email Templates** (type: Products).
- **Cron job** — Must be configured (see [Cron Jobs](cron-jobs.md)).
- Customer must be **logged in** (carts are tied to client accounts).

---

## ⚙️ Configuration

1. Go to **Setup → Settings → Products**.
2. Under **Features**, enable **Abandoned cart tracking**.
3. Under **Abandoned Cart Email**:
   - Enable **Send abandoned cart reminder emails**.
   - Set **Delay before sending** (hours), e.g., 24.
4. Go to **Setup → Email Templates**.
5. Find **Abandoned Cart Reminder** (type: **Products**).
6. **Activate** the template (it is disabled by default).
7. Customize the subject and message using the merge fields below.
8. Save.

---

## 📧 Email Template

The abandoned cart email uses Perfex's standard email template system. You can fully customize the subject and body in **Setup → Email Templates**.

**Merge fields:**

| Merge field | Description |
|-------------|-------------|
| `{client_name}` | Customer or company name |
| `{cart_total}` | Formatted cart total (e.g., USD 99.00) |
| `{cart_link}` | Link back to checkout |
| `{companyname}` | Your company name |

**Example subject:** `You left items in your cart`

**Example message:**
```
Hi {client_name},

You have items worth {cart_total} in your cart.

[Complete your purchase]({cart_link})

Best regards,
{companyname}
```

The template must be **active** for the cron to send emails. If disabled, no abandoned cart emails are sent.

---

## ⏰ Cron Job Setup

Add the abandoned cart cron URL to your server's crontab:

```
0 9 * * * curl -s "https://yoursite.com/products/cron/abandoned_cart_emails" > /dev/null 2>&1
```

Run daily (e.g., 9:00 AM). See [Cron Jobs](cron-jobs.md) for full details.

---

## 🔄 How It Works

1. When a logged-in customer reaches checkout, their cart is stored.
2. When they leave without purchasing, the cart remains in the database.
3. The cron job runs and finds carts older than the delay.
4. For each cart, the primary contact's email is used to send a reminder.
5. The email includes a link back to the checkout page.
6. Once sent, the cart is marked so it is not emailed again.

---

## 📱 WhatsApp/SMS Integration

If **WhatsApp/SMS Notifications** are configured with an **abandoned_cart** trigger, SMS/WhatsApp messages can also be sent. See [WhatsApp & SMS Notifications](whatsapp-sms-notifications.md).
