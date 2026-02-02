# Cron Jobs

Several features require scheduled tasks (cron jobs) to run. All URLs are listed in **Setup → Settings → Products** at the bottom.

---

## Why Cron Jobs?

- **Abandoned cart emails** — Sent only when the cron runs.
- **Back-in-stock notifications** — Checked when the cron runs.
- **Price drop alerts** — Checked when the cron runs.

Without these crons, these features will not work.

---

## Cron URLs

| Feature | URL | Recommended |
|---------|-----|-------------|
| **Abandoned cart emails** | `https://yoursite.com/products/cron/abandoned_cart_emails` | Daily |
| **Back-in-stock** | `https://yoursite.com/products/cron/back_in_stock_emails` | Daily |
| **Price drop** | `https://yoursite.com/products/cron/price_drop_emails` | Daily |

Replace `yoursite.com` with your actual domain.

---

## How to Add to Crontab

### Linux / cPanel

1. Open your crontab: `crontab -e`
2. Add lines like:

```bash
# Run daily at 9:00 AM
0 9 * * * curl -s "https://yoursite.com/products/cron/abandoned_cart_emails" > /dev/null 2>&1
0 9 * * * curl -s "https://yoursite.com/products/cron/back_in_stock_emails" > /dev/null 2>&1
0 9 * * * curl -s "https://yoursite.com/products/cron/price_drop_emails" > /dev/null 2>&1
```

### Alternative: wget

```bash
0 9 * * * wget -q -O - "https://yoursite.com/products/cron/abandoned_cart_emails" > /dev/null 2>&1
```

### PHP CLI (if curl/wget unavailable)

```bash
0 9 * * * php -r "file_get_contents('https://yoursite.com/products/cron/abandoned_cart_emails');"
```

---

## Cron Behavior

- Each endpoint checks if its feature is enabled before running.
- If disabled, it exits immediately.
- Output is minimal (e.g., "Sent: X" for emails). No output usually means nothing to process or feature disabled.

---

## Testing

You can test by visiting the URL in a browser or running:

```bash
curl "https://yoursite.com/products/cron/abandoned_cart_emails"
```

You should see a short response (e.g., "Sent: 0" or "Disabled").
