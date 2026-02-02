# 📱 WhatsApp & SMS Notifications

Send WhatsApp or SMS notifications for order events, abandoned carts, and more.

---

## 📋 Overview

**Flow:**

1. Admin configures **gateway URLs** in Settings.
2. Admin creates **notification templates** in **Products → Notifications** (or similar).
3. When triggers fire (e.g., order placed, invoice paid, abandoned cart), the module sends a request to the gateway.
4. The gateway delivers the message via WhatsApp or SMS.

---

## ⚙️ Configuration

### Gateway URLs

1. Go to **Setup → Settings → Products**.
2. Under **WhatsApp / SMS Notifications**:
   - Enable the feature.
   - Enter **SMS Gateway URL** — Your SMS provider's webhook/API endpoint.
   - Enter **WhatsApp Gateway URL** — Your WhatsApp provider's webhook/API endpoint.
3. Save.

### Per-Template Override 🔧

Each notification template can use the **global gateway** or a **custom webhook URL**.

---

## ➕ Creating a Notification Template

1. Go to **Products → Notifications** (or **Product Notifications**).
2. Click **New Notification**.
3. Configure:

| Field | Description |
|-------|-------------|
| **Name** | Internal name |
| **Channel** | WhatsApp or SMS |
| **Trigger** | abandoned_cart, order_placed, order_paid |
| **Recipient** | client or staff |
| **Message template** | Text with merge fields |
| **Webhook URL** | Override global (optional) |
| **Webhook method** | POST or GET |
| **Webhook body** | JSON template for the API |

4. Save.

---

## 📝 Merge Fields

Use these placeholders in the message template:

| Field | Description |
|-------|-------------|
| `{companyname}` | Your company name |
| `{cart_link}` | Link to checkout |
| `{cart_total}` | Cart total (abandoned cart) |
| `{client_name}` | Customer name |
| `{contact_phonenumber}` | Phone number |
| `{order_id}` | Order ID |
| `{order_date}` | Order date |
| `{total}` | Order total |
| `{invoice_number}` | Invoice number |
| `{invoice_link}` | Link to invoice |

---

## Trigger Events

- **abandoned_cart** — When cron sends abandoned cart reminders.
- **order_placed** — When an order/invoice is created.
- **order_paid** — When an invoice is marked as paid.

---

## 📦 Webhook Body

The default body format is often:

```json
{"to":"{contact_phonenumber}","body":{message}}
```

The `{message}` placeholder is replaced with the rendered message (JSON-encoded). Adjust the body template to match your gateway's API requirements.
